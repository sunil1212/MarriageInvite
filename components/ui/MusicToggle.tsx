"use client";

type MusicToggleProps = {
  muted: boolean;
  onToggle: () => void;
  visible: boolean;
};

function SpeakerIcon({ muted }: { muted: boolean }) {
  if (muted) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M11 5L6 9H3v6h3l5 4V5zm8.5 3.5a9 9 0 010 13"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 5L6 9H3v6h3l5 4V5zm4.5-2.5a9 9 0 010 15M16.5 7.5a5.5 5.5 0 010 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MusicToggle({ muted, onToggle, visible }: MusicToggleProps) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-footer-brown/90 text-white shadow-lg transition hover:bg-footer-brown"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
    >
      <SpeakerIcon muted={muted} />
    </button>
  );
}
