"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";

function AboutCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const cards = [
    { title: "Tom Cruise", subtitle: "Founder & Chairman", image: "/images/image 46.svg" },
    { title: "Emma Watson", subtitle: "Managing Director", image: "/images/image 51.svg" },
    { title: "Will Smith", subtitle: "Product Designer", image: "/images/image 47.svg" },
    { title: "Tom Cruise", subtitle: "Founder & Chairman", image: "/images/image 46.svg" },
    { title: "Emma Watson", subtitle: "Managing Director", image: "/images/image 51.svg" },
    { title: "Will Smith", subtitle: "Product Designer", image: "/images/image 47.svg" },
    { title: "Tom Cruise", subtitle: "Founder & Chairman", image: "/images/image 46.svg" },
    { title: "Emma Watson", subtitle: "Managing Director", image: "/images/image 51.svg" },
    { title: "Will Smith", subtitle: "Product Designer", image: "/images/image 47.svg" },
    { title: "Tom Cruise", subtitle: "Founder & Chairman", image: "/images/image 46.svg" },
    { title: "Emma Watson", subtitle: "Managing Director", image: "/images/image 51.svg" },
    { title: "Will Smith", subtitle: "Product Designer", image: "/images/image 47.svg" },
    { title: "Tom Cruise", subtitle: "Founder & Chairman", image: "/images/image 46.svg" },
    { title: "Emma Watson", subtitle: "Managing Director", image: "/images/image 51.svg" },
    { title: "Will Smith", subtitle: "Product Designer", image: "/images/image 47.svg" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [cardsPerGroup, setCardsPerGroup] = React.useState(3);

  React.useEffect(() => {
    function updateCardsPerGroup() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerGroup(3);
      } else if (width >= 768) {
        setCardsPerGroup(2);
      } else {
        setCardsPerGroup(1);
      }
    }

    updateCardsPerGroup();

    window.addEventListener("resize", updateCardsPerGroup);
    return () => window.removeEventListener("resize", updateCardsPerGroup);
  }, []);

  const groupedCards = React.useMemo(() => {
    const groups = [];
    for (let i = 0; i < cards.length; i += cardsPerGroup) {
      groups.push(cards.slice(i, i + cardsPerGroup));
    }
    return groups;
  }, [cards, cardsPerGroup]);

  return (
    <div className="relative flex flex-col justify-center w-full px-0">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {groupedCards.map((group, slideIndex) => (
            <CarouselItem key={slideIndex} className="flex justify-center w-full">
              <div
                className={`grid grid-cols-1 gap-6 md:px-4 sm:px-0 ${cardsPerGroup === 1
                  ? "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
                  : cardsPerGroup === 2
                    ? "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                    : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                style={{ width: `${cardsPerGroup * 370 + (cardsPerGroup - 1) * 24}px` }}
              >
                {group.map((item, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="rounded shadow-lg flex flex-col w-full h-auto"
                  >
                    <div className="relative w-full flex md:justify-center sm:pt-5 bg-[#F5F5F5]">
                      <div className="overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={294}
                          height={350}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 text-start px-4 sm:mt-4 sm:px-3 md:mt-5 md:px-3">
                      <p className="font-medium text-3xl sm:text-xl md:text-2xl">{item.title}</p>
                      <h1 className="font-normal text-base sm:text-sm md:text-base">{item.subtitle}</h1>
                      <div className="flex gap-4 mt-4">
                        <Twitter className="w-6 h-6 cursor-pointer" />
                        <Instagram className="w-6 h-6 cursor-pointer" />
                        <Linkedin className="w-6 h-6 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots below carousel, hidden on small devices */}
      <div className="hidden md:flex items-center justify-center gap-2 mt-8 sm:mt-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3.5 w-3.5 rounded-full bg-gray-400",
              current === index + 1 && "border-2 border-gray-200 bg-[#DB4444]"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutCarousel;
