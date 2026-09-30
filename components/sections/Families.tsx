import { SectionShell } from "@/components/ui/SectionShell";
import { site } from "@/lib/site";

function FamilyCard({
  label,
  members,
}: {
  label: string;
  members: string[];
}) {
  return (
    <div className="rounded-2xl bg-white px-6 py-8 text-center shadow-md">
      <p className="font-caps text-[10px] tracking-[0.3em] text-text-muted">{label}</p>
      <div className="mt-4 space-y-2 font-serif text-base text-burgundy-dark">
        {members.map((m) => (
          <p key={m}>{m}</p>
        ))}
      </div>
    </div>
  );
}

export function Families() {
  const { families } = site;

  return (
    <SectionShell className="bg-sage">
      <div className="mx-auto max-w-md text-center">
        <p className="font-caps text-[10px] tracking-[0.35em] text-text-muted">
          {families.eyebrow}
        </p>
        <h2 className="mt-2 font-script text-4xl text-burgundy">{families.heading}</h2>
        <div className="mt-8 space-y-6">
          <FamilyCard label={families.groom.label} members={families.groom.members} />
          <FamilyCard label={families.bride.label} members={families.bride.members} />
        </div>
      </div>
    </SectionShell>
  );
}
