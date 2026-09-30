import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";

export function JharokhaHero() {
  const { hero, couple } = site;

  return (
    <SectionShell className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-cream pb-14 pt-6">
      <div className="pointer-events-none absolute inset-0 border-x-8 border-transparent bg-[linear-gradient(90deg,#f0c4d0_0%,transparent_12%,transparent_88%,#f0c4d0_100%)] opacity-40" />
      <div className="relative mx-auto max-w-md text-center">
        <div className="mb-2 h-16 bg-[url('/assets/frames/arch-top.svg')] bg-contain bg-top bg-no-repeat" />
        <Image
          src="/assets/decor/ganesha.svg"
          alt="Ganesha"
          width={48}
          height={48}
          className="mx-auto"
        />
        <p className="mt-2 font-serif text-sm text-text-muted">{hero.invocation}</p>
        <p className="mx-auto mt-4 max-w-xs font-serif text-sm leading-relaxed text-text-muted">
          {hero.intro}
        </p>
        <p className="mt-6 font-script text-5xl text-burgundy">{couple.bride.name}</p>
        <p className="mt-1 text-xs text-text-muted">{couple.bride.parents}</p>
        <p className="my-3 font-script text-2xl text-burgundy/80">{hero.connector}</p>
        <p className="font-script text-5xl text-burgundy">{couple.groom.name}</p>
        <p className="mt-1 text-xs text-text-muted">{couple.groom.parents}</p>
        <div className="mt-6 h-20 bg-[url('/assets/frames/balcony.svg')] bg-contain bg-bottom bg-no-repeat" />
      </div>
    </SectionShell>
  );
}
