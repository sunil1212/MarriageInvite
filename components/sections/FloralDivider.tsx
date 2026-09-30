import { SectionShell } from "@/components/ui/SectionShell";
import { ScratchCard } from "@/components/ui/ScratchCard";
import { site } from "@/lib/site";

export function FloralDivider() {
  const { scratch } = site;

  return (
    <SectionShell className="bg-cream py-8">
      <div className="mx-auto max-w-md">
        <div
          className="mb-8 h-24 bg-[url('/assets/frames/balcony.svg')] bg-contain bg-center bg-no-repeat"
          role="img"
          aria-label="Decorative floral border"
        />
        <ScratchCard label={scratch.label} revealText={scratch.reveal} />
      </div>
    </SectionShell>
  );
}
