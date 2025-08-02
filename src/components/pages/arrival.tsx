"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Title from "@/utils/helpers/title";

function Arrival() {
  return (
    <section className="container mx-auto py-16">
      <div> <Title>New Arrivals</Title></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Left Big Card */}
        <div className="relative group overflow-hidden rounded-lg h-full">
          <img
            src="/images/ps5-slim.svg"
            alt="PlayStation 5"
            className="w-full h-[600px] bg-black pt-20 ps-14 object-left object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-end mb-8 ms-8 p-6">
            <h3 className="text-white text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-gray-200 text-sm my-3">
              Black and White version of the PS5 <br /> coming out on sale.
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

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 gap-6 h-full">
          {/* Women's Collections */}
          <div className="relative group overflow-hidden rounded-lg h-[280px]">
            <img
              src="/images/attractive-woman-wearing-hat.svg"
              alt="Women's Collections"
              className="w-full h-full  object-cover bg-black"
            />
            <div className="absolute inset-0 flex flex-col justify-end mb-6 ms-6 p-6">
              <h3 className="text-white text-2xl font-semibold">
                Women’s Collections
              </h3>
              <p className="text-gray-200 text-sm my-3">
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
          <div className="flex flex-col sm:flex-row gap-6 h-[280px]">
            {/* Speakers */}
            <div className="relative group overflow-hidden rounded-lg w-full sm:w-1/2 h-full">
              <img
                src="/images/Speakers_bg.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full z-0"
              />

              {/* Foreground Image */}
              <img
                src="/images/Speakers.svg"
                alt="Perfume"
                className="relative z-10 w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 flex flex-col justify-end mb-6 ms-6 p-6 z-20">
                <h3 className="text-white text-2xl font-semibold">Speakers</h3>
                <p className="text-gray-200 text-sm my-3">
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
            <div className="relative group overflow-hidden rounded-lg w-full sm:w-1/2 h-full">
              {/* Background Image */}
              <img
                src="/images/Perfume_bg.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full z-0"
              />

              {/* Foreground Image */}
              <img
                src="/images/Perfume.svg"
                alt="Perfume"
                className="relative z-10 w-full h-full object-contain p-4"
              />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end mb-6 ms-6 p-6 z-20">
                <h3 className="text-white text-2xl font-semibold">Perfume</h3>
                <p className="text-gray-200 text-sm my-3">
                  GUCCI INTENSE OUD EDP.
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

          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrival;
