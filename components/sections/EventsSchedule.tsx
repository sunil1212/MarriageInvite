import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";
import Image from "next/image";

export function EventsSchedule() {
  const { events } = site;

  return (
    <SectionShell className="invite-texture bg-cream">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-script text-4xl text-burgundy">{events.heading}</h2>
        {events.items.map((ev) => (
          <article
            key={ev.name}
            className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] p-5 text-white shadow-xl"
          >
            <div className="flex gap-4">
              <Image
                src="/assets/events/couple-illustration.svg"
                alt=""
                width={96}
                height={128}
                className="h-32 w-24 shrink-0 rounded-xl object-contain bg-white/5 p-1"
              />
              <div className="flex-1">
                <h3 className="font-script text-2xl text-rose-200">{ev.name}</h3>
                <p className="mt-1 text-xs text-white/70">{ev.tagline}</p>
                <dl className="mt-4 space-y-2 text-xs">
                  <div>
                    <dt className="font-caps tracking-widest text-white/50">DATE</dt>
                    <dd className="font-serif">{ev.date}</dd>
                  </div>
                  <div>
                    <dt className="font-caps tracking-widest text-white/50">TIME</dt>
                    <dd className="font-serif">{ev.time}</dd>
                  </div>
                  <div>
                    <dt className="font-caps tracking-widest text-white/50">VENUE</dt>
                    <dd className="font-serif">{ev.venue}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
