"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/images/pngegg (5) (1).png" alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src="/images/pngegg (4) (1).png" alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src="/images/pngegg (6) (1).png" alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src="/images/pngegg (6) (2).png" alt="Slide 1" />
        </div>
      </div>
    </div>
  );
}
