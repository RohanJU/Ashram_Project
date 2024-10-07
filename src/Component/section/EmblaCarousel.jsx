"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide1</div>
        <div className="embla__slide">Slide2</div>
        <div className="embla__slide">Slide3</div>
      </div>
    </div>
  )
}

