import { SectionShell } from "@/components/ui/SectionShell";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { site } from "@/lib/site";

export function GalleryStrip() {
  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-2xl text-burgundy">{site.gallery.caption}</p>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 snap-x">
          {[1, 2, 3].map((n) => (
            <PhotoPlaceholder
              key={n}
              label={`Gallery ${n}`}
              className="min-w-[140px] snap-center"
              aspect="square"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
