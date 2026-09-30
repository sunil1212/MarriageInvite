import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";

const ICONS: Record<string, string> = {
  envelope: "✉️",
  heart: "❤️",
  plane: "✈️",
  ring: "💍",
};

export function LoveStory() {
  const { loveStory } = site;

  return (
    <SectionShell className="bg-cream" id="story">
      <div className="mx-auto max-w-md">
        <p className="text-center font-caps text-[10px] tracking-[0.35em] text-text-muted">
          {loveStory.eyebrow}
        </p>
        <h2 className="mt-2 text-center font-script text-4xl text-burgundy">
          {loveStory.heading}
        </h2>
        <div className="relative mt-10 pl-10">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-cream-dark" />
          {loveStory.milestones.map((m, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              <span
                className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border border-cream-dark bg-white text-sm shadow-sm"
                aria-hidden
              >
                {ICONS[m.icon] ?? "•"}
              </span>
              <h3 className="font-serif text-lg font-semibold text-burgundy-dark">{m.title}</h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-text-muted">{m.body}</p>
              {m.chatPreview ? (
                <div className="mt-3 inline-block rounded-2xl rounded-bl-sm bg-white px-4 py-2 shadow-md">
                  <span className="text-sm text-blue-600">{m.chatPreview}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
