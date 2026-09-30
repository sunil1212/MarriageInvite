"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/** When this share of the card is scratched, remove overlay entirely. */
const REVEAL_THRESHOLD = 0.3;
const BRUSH_RADIUS = 24;
const BRUSH_AREA = Math.PI * BRUSH_RADIUS * BRUSH_RADIUS;

type ScratchCardProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export function ScratchCard({ label, children, className = "" }: ScratchCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const scratching = useRef(false);
  const sizeRef = useRef({ width: 0, height: 0 });
  const scratchedAreaRef = useRef(0);
  const revealedRef = useRef(false);

  const revealAll = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    scratching.current = false;
    setRevealed(true);
  }, []);

  const drawOverlay = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#d4a84b");
      gradient.addColorStop(0.5, "#c9a227");
      gradient.addColorStop(1, "#a88420");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      const fontSize = Math.min(20, Math.max(15, Math.round(width * 0.048)));
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = `600 ${fontSize}px Georgia, serif`;
      ctx.textAlign = "center";
      ctx.fillText(label, width / 2, height / 2 + fontSize * 0.15);
    },
    [label],
  );

  const syncCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || revealedRef.current) return;

    const { width, height } = container.getBoundingClientRect();
    const w = Math.round(width);
    const h = Math.round(height);
    if (w < 1 || h < 1) return;

    sizeRef.current = { width: w, height: h };
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawOverlay(ctx, w, h);
  }, [drawOverlay]);

  useEffect(() => {
    syncCanvas();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => syncCanvas());
    observer.observe(container);
    return () => observer.disconnect();
  }, [syncCanvas]);

  const measureScratchedRatio = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const totalPixels = width * height;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 64) cleared++;
    }
    return cleared / totalPixels;
  };

  const scratch = (x: number, y: number) => {
    if (revealedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = sizeRef.current;
    if (width < 1 || height < 1) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    scratchedAreaRef.current += BRUSH_AREA;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, BRUSH_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    const pixelRatio = measureScratchedRatio(ctx, width, height);
    const areaRatio = Math.min(1, scratchedAreaRef.current / (width * height));

    if (pixelRatio > REVEAL_THRESHOLD || areaRatio > REVEAL_THRESHOLD) {
      revealAll();
    }
  };

  const pointerPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = sizeRef.current;
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 h-full w-full touch-none cursor-crosshair"
          onPointerDown={(e) => {
            if (revealedRef.current) return;
            scratching.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            const { x, y } = pointerPos(e);
            scratch(x, y);
          }}
          onPointerMove={(e) => {
            if (!scratching.current || revealedRef.current) return;
            const { x, y } = pointerPos(e);
            scratch(x, y);
          }}
          onPointerUp={(e) => {
            scratching.current = false;
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              /* already released */
            }
          }}
          onPointerCancel={() => {
            scratching.current = false;
          }}
        />
      )}
    </div>
  );
}
