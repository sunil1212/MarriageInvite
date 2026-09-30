"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { site } from "@/lib/site";
import { useState } from "react";

export function EventHighlight() {
  const { highlight } = site.events;
  const [imgError, setImgError] = useState(false);

  return (
    <SectionShell className="bg-burgundy-dark p-0">
      <div className="mx-auto flex max-w-md flex-col md:flex-row">
        <div className="flex-1 px-5 py-8 text-white">
          <p className="font-caps text-xs tracking-widest text-gold-light">{highlight.day}</p>
          <p className="font-serif text-lg">{highlight.date}</p>
          <p className="mt-2 font-serif text-sm text-white/90">{highlight.time}</p>
          <p className="mt-4 font-serif text-sm leading-relaxed text-white/80">{highlight.venue}</p>
          <p className="mt-2 font-script text-2xl text-rose-200">{highlight.title}</p>
        </div>
        <div className="w-full md:w-2/5 p-4">
          {imgError ? (
            <PhotoPlaceholder label="Traditional attire" aspect="portrait" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={highlight.image}
              alt="Couple"
              className="rounded-2xl object-cover shadow-lg aspect-[3/4] w-full"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </SectionShell>
  );
}
