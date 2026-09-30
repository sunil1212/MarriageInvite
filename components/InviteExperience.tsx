"use client";

import { AwaitingPresence } from "@/components/sections/AwaitingPresence";
import { EventHighlight } from "@/components/sections/EventHighlight";
import { EventsSchedule } from "@/components/sections/EventsSchedule";
import { Families } from "@/components/sections/Families";
import { FloralDivider } from "@/components/sections/FloralDivider";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { InviteFooter } from "@/components/sections/InviteFooter";
import { JharokhaHero } from "@/components/sections/JharokhaHero";
import { LoveStory } from "@/components/sections/LoveStory";
import { MeetTheCouple } from "@/components/sections/MeetTheCouple";
import { MomentsCarousel } from "@/components/sections/MomentsCarousel";
import { SaveTheDate } from "@/components/sections/SaveTheDate";
import { SplashScreen } from "@/components/sections/SplashScreen";
import { VenueSection } from "@/components/sections/VenueSection";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { ParticleField } from "@/components/ui/ParticleField";
import { site } from "@/lib/site";
import { useCallback, useRef, useState } from "react";

export function InviteExperience() {
  const [hasEntered, setHasEntered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = useCallback(() => {
    setTransitioning(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      void audio.play().catch(() => {
        setMuted(true);
      });
    }
    window.setTimeout(() => {
      setHasEntered(true);
      setTransitioning(false);
    }, 750);
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
    if (!next) void audio.play().catch(() => undefined);
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} src={site.audio.src} loop preload="none" />

      {!hasEntered && (
        <SplashScreen
          sealNames={site.splash.sealNames}
          cta={site.splash.cta}
          onEnter={handleEnter}
          transitioning={transitioning}
        />
      )}

      {hasEntered && (
        <>
          <ParticleField />
          <MusicToggle muted={muted} onToggle={toggleMute} visible={hasEntered} />
        </>
      )}

      <div
        className={`mx-auto min-h-full w-full max-w-md bg-cream shadow-xl md:my-0 md:min-h-screen ${
          hasEntered ? "" : "invisible h-0 overflow-hidden"
        }`}
      >
        <JharokhaHero />
        <FloralDivider />
        <SaveTheDate />
        <MeetTheCouple />
        <LoveStory />
        <MomentsCarousel />
        <GalleryStrip />
        <EventsSchedule />
        <EventHighlight />
        <AwaitingPresence />
        <Families />
        <VenueSection />
        <InviteFooter />
      </div>
    </>
  );
}
