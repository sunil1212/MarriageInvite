"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { site } from "@/lib/site";
import { useState } from "react";

function ProfileBlock({
  label,
  name,
  bio,
  imageSrc,
}: {
  label: string;
  name: string;
  bio: string;
  imageSrc: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mb-10 text-center">
      {imgError ? (
        <PhotoPlaceholder label={`Photo: ${name}`} className="mx-auto w-[85%]" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={name}
          className="mx-auto w-[85%] rounded-3xl object-cover shadow-lg aspect-[3/4]"
          onError={() => setImgError(true)}
        />
      )}
      <p className="mt-5 font-caps text-[10px] tracking-[0.35em] text-text-muted">{label}</p>
      <p className="mt-1 font-script text-4xl text-burgundy">{name}</p>
      <p className="mx-auto mt-3 max-w-xs font-serif text-sm italic leading-relaxed text-text-muted">
        {bio}
      </p>
    </div>
  );
}

export function MeetTheCouple() {
  const { meetCouple, couple } = site;
  const [videoError, setVideoError] = useState(false);

  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-script text-4xl text-burgundy">{meetCouple.heading}</h2>
        <div className="mx-auto mt-6 w-full overflow-hidden rounded-2xl shadow-md">
          {videoError ? (
            <PhotoPlaceholder label="Couple video" aspect="video" />
          ) : (
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              poster={meetCouple.videoPoster}
              onError={() => setVideoError(true)}
            >
              <source src={meetCouple.videoUrl} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="mt-10">
          <ProfileBlock
            label={couple.bride.label}
            name={couple.bride.name}
            bio={couple.bride.bio}
            imageSrc="/assets/photos/bride.jpg"
          />
          <ProfileBlock
            label={couple.groom.label}
            name={couple.groom.name}
            bio={couple.groom.bio}
            imageSrc="/assets/photos/groom.jpg"
          />
        </div>
      </div>
    </SectionShell>
  );
}
