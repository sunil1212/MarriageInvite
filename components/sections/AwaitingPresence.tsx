import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";

export function AwaitingPresence() {
  const { presence } = site;

  return (
    <SectionShell className="bg-mint text-center">
      <div className="mx-auto max-w-md px-4">
        <h2 className="font-script text-4xl leading-tight text-burgundy">{presence.heading}</h2>
        <p className="mt-4 font-serif text-base italic text-text-muted">{presence.sub}</p>
      </div>
    </SectionShell>
  );
}
