type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "portrait" | "video" | "square";
};

export function PhotoPlaceholder({
  label,
  className = "",
  aspect = "portrait",
}: PhotoPlaceholderProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[3/4]";

  return (
    <div
      className={`flex items-center justify-center rounded-3xl bg-gradient-to-br from-rose-100 via-cream to-sage/40 text-center text-sm text-text-muted shadow-inner ${aspectClass} ${className}`}
    >
      <span className="px-4 font-caps text-[10px] tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
