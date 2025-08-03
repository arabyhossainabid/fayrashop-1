"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Title from "@/utils/helpers/title";

function Arrival() {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <div>
        <Title>New Arrivals</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Big Card */}
        <div className="relative group overflow-hidden rounded-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="/images/ps5-slim.svg"
            alt="PlayStation 5"
            className="w-full h-full object-contain bg-black pt-6 sm:pt-10 md:pt-16 ps-4 sm:ps-8 md:ps-10 lg:ps-14"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 z-20">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              PlayStation 5
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm my-1 sm:my-2 md:my-3 leading-snug">
              Black and White version of the PS5 <br className="hidden sm:block" />
              coming out on sale.
            </p>
            <Link href="/product">
              <Button
                variant="link"
                className="text-white p-0 h-auto underline-offset-4 hover:text-[#DB4444] text-sm sm:text-base"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>


        {/* Right Side Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Women's Collections */}
          <div className="relative group overflow-hidden rounded-lg h-[240px] sm:h-[260px] md:h-[280px]">
            <img
              src="/images/attractive-woman-wearing-hat.svg"
              alt="Women's Collections"
              className="w-full h-full object-cover bg-black"
            />
            <div className="absolute inset-0 flex flex-col justify-end mb-4 sm:mb-6 ms-4 sm:ms-6 p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl font-semibold">Women’s Collections</h3>
              <p className="text-gray-200 text-sm my-2 sm:my-3">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <Link href="/product">
                <Button
                  variant="link"
                  className="text-white p-0 h-auto underline-offset-4 hover:text-[#DB4444]"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Speakers & Perfume Row */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Speakers */}
            <div className="relative group overflow-hidden rounded-lg w-full sm:w-1/2 aspect-[2/1] sm:aspect-auto h-[240px] sm:h-[260px] md:h-[280px]">
              <img
                src="/images/Speakers_bg.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full z-0 object-cover"
              />
              <img
                src="/images/Speakers.svg"
                alt="Speakers"
                className="relative z-10 w-full h-full object-contain p-4 sm:p-5"
              />
              <div className="absolute inset-0 flex flex-col justify-end mb-4 sm:mb-6 ms-4 sm:ms-6 p-4 sm:p-6 z-20">
                <h3 className="text-white text-xl sm:text-2xl font-semibold">Speakers</h3>
                <p className="text-gray-200 text-sm my-2 sm:my-3">
                  Amazon wireless speakers.
                </p>
                <Link href="/product">
                  <Button
                    variant="link"
                    className="text-white p-0 h-auto underline-offset-4 hover:text-[#DB4444]"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative group overflow-hidden rounded-lg w-full sm:w-1/2 aspect-[2/1] sm:aspect-auto h-[240px] sm:h-[260px] md:h-[280px]">
              <img
                src="/images/Perfume_bg.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full z-0 object-cover"
              />
              <img
                src="/images/Perfume.svg"
                alt="Perfume"
                className="relative z-10 w-full h-full object-contain p-4 sm:p-5"
              />
              <div className="absolute inset-0 flex flex-col justify-end mb-4 sm:mb-6 ms-4 sm:ms-6 p-4 sm:p-6 z-20">
                <h3 className="text-white text-xl sm:text-2xl font-semibold">Perfume</h3>
                <p className="text-gray-200 text-sm my-2 sm:my-3">GUCCI INTENSE OUD EDP.</p>
                <Link href="/product">
                  <Button
                    variant="link"
                    className="text-white p-0 h-auto underline-offset-4 hover:text-[#DB4444]"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Arrival;
