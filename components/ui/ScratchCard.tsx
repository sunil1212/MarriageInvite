"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ScratchCardProps = {
  label: string;
  revealText: string;
  width?: number;
  height?: number;
};

export function ScratchCard({
  label,
  revealText,
  width = 300,
  height = 120,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const scratching = useRef(false);

  const drawOverlay = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#d4a84b");
      gradient.addColorStop(0.5, "#c9a227");
      gradient.addColorStop(1, "#a88420");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = "600 11px Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText(label, width / 2, height / 2 + 4);
    },
    [label, width, height],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = width;
    canvas.height = height;
    drawOverlay(ctx);
  }, [drawOverlay, width, height]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, width, height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    if (cleared / (width * height) > 0.45) {
      setRevealed(true);
    }
  };

  const pointerPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  return (
    <div
      className="relative mx-auto overflow-hidden rounded-lg shadow-md"
      style={{ width: "100%", maxWidth: width }}
    >
      <div
        className="flex items-center justify-center bg-cream px-4 text-center font-serif text-burgundy"
        style={{ minHeight: height }}
      >
        <p className="text-lg italic">{revealText}</p>
      </div>
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
          onPointerDown={(e) => {
            scratching.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            const { x, y } = pointerPos(e);
            scratch(x, y);
          }}
          onPointerMove={(e) => {
            if (!scratching.current) return;
            const { x, y } = pointerPos(e);
            scratch(x, y);
          }}
          onPointerUp={() => {
            scratching.current = false;
          }}
          onPointerLeave={() => {
            scratching.current = false;
          }}
        />
      )}
    </div>
  );
}
