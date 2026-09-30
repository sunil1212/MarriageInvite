import { SectionShell } from "@/components/ui/SectionShell";

export function FloralDivider() {
  return (
    <SectionShell className="bg-cream py-8">
      <div className="mx-auto max-w-md">
        <div
          className="h-24 bg-[url('/assets/frames/balcony.svg')] bg-contain bg-center bg-no-repeat"
          role="img"
          aria-label="Decorative floral border"
        />
      </div>
    </SectionShell>
  );
}
