import { site } from "@/lib/site";

export function InviteFooter() {
  const { footer } = site;

  return (
    <footer className="bg-footer-brown px-6 py-12 text-center text-white">
      <div className="mx-auto max-w-md">
        <p className="font-caps text-[10px] tracking-[0.4em] text-white/70">{footer.eyebrow}</p>
        <p className="mt-3 font-script text-5xl">{footer.names}</p>
        <p className="mt-4 font-serif text-lg">{footer.dates}</p>
        <p className="mt-6 font-caps text-[11px] tracking-[0.25em] text-gold-light">
          {footer.hashtag}
        </p>
      </div>
    </footer>
  );
}
