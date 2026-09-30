"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { site } from "@/lib/site";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function MomentsCarousel() {
  const { moments } = site;
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <SectionShell className="bg-mint">
      <div className="mx-auto max-w-md text-center">
        <p className="font-caps text-[10px] tracking-[0.35em] text-text-muted">
          {moments.eyebrow}
        </p>
        <h2 className="mt-2 font-script text-4xl text-burgundy">{moments.heading}</h2>
        <Swiper
          modules={[Pagination]}
          centeredSlides
          slidesPerView={1.15}
          spaceBetween={16}
          pagination={{ clickable: true }}
          className="mt-8 !pb-10"
        >
          {moments.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-3xl bg-white p-3 shadow-lg">
                {failed[i] ? (
                  <PhotoPlaceholder label={`Moment ${i + 1}`} aspect="portrait" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={slide.src}
                    alt=""
                    className="aspect-[3/4] w-full rounded-2xl object-cover"
                    onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                  />
                )}
                <p className="mt-3 font-script text-xl text-burgundy">{slide.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionShell>
  );
}
