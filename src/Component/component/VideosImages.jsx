"use client";

import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Carousel component for reusable structure
const Carousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={slide}
              alt={`Slide ${index}`}
              width={300}
              height={200}
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function VideosImages() {
  const videoSlides = [
    "/images/video1.png", // Replace these paths with actual images
    "/images/video2.png",
    "/images/video3.png",
    "/images/video4.png",
  ];

  const bookSlides = [
    "/images/book1.png", // Replace these paths with actual images
    "/images/book2.png",
    "/images/book3.png",
    "/images/book4.png",
  ];

  return (
    <div className="carousel-section">
      {/* Videos Section */}
      <h2 className="carousel-title">Videos</h2>
      <Carousel slides={videoSlides} />

      {/* Books Section */}
      <h2 className="carousel-title">Books</h2>
      <Carousel slides={bookSlides} />
    </div>
  );
}
