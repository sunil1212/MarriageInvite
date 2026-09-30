"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { useCountdown } from "@/hooks/useCountdown";
import { padTwo } from "@/lib/countdown";
import { site } from "@/lib/site";

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-lg border border-cream-dark bg-white/80 px-2 py-3 shadow-sm">
      <span className="font-serif text-2xl text-burgundy-dark">{value}</span>
      <span className="mt-1 font-caps text-[9px] tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );
}

export function SaveTheDate() {
  const { saveTheDate } = site;
  const { days, hours, minutes, seconds } = useCountdown(saveTheDate.countdownTarget);

  return (
    <SectionShell className="invite-texture bg-cream">
      <div className="mx-auto max-w-md text-center">
        <div className="rounded-2xl border-2 border-gold/60 bg-white/50 px-4 py-6">
          <p className="font-caps text-[10px] tracking-[0.3em] text-text-muted">
            {saveTheDate.heading}
          </p>
          <p className="mt-2 font-script text-3xl text-burgundy">{saveTheDate.dates}</p>
        </div>
        <div className="mt-6 flex gap-2">
          <CountdownBox value={padTwo(days)} label="DAYS" />
          <CountdownBox value={padTwo(hours)} label="HOURS" />
          <CountdownBox value={padTwo(minutes)} label="MINUTES" />
          <CountdownBox value={padTwo(seconds)} label="SECONDS" />
        </div>
      </div>
    </SectionShell>
  );
}
