import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";

export function VenueSection() {
  const { venue } = site;

  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-md text-center">
        <p className="font-caps text-[10px] tracking-[0.35em] text-text-muted">{venue.eyebrow}</p>
        <h2 className="mt-2 font-script text-4xl text-burgundy">{venue.heading}</h2>
        <p className="mx-auto mt-4 max-w-sm font-serif text-sm leading-relaxed text-text-muted">
          {venue.address}
        </p>
        <div className="mt-6 overflow-hidden rounded-xl shadow-md">
          <iframe
            title="Venue map"
            src={venue.mapEmbed}
            className="h-56 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-caps text-[11px] tracking-widest text-white shadow-md transition hover:bg-gold/90"
        >
          Get Directions
        </a>
      </div>
    </SectionShell>
  );
}
