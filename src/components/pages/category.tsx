import React from 'react'
import Link from 'next/link'
import Title from '@/utils/helpers/title'
import { Button } from '@/components/ui/button'
import Timer from '../timer'

function Category() {
  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="py-12 lg:py-16 md:ps-14 ps-5">
          <p className="text-[#00FF66] font-semibold lg:text-lg mb-8">Categories</p>
          <div className='mb-8'><Title>Enhance Your Music Experience</Title></div>

          {/* Timer */}
          <div className="mb-8">
            <Timer days={5} hours={23} minutes={59} seconds={35} />
          </div>

          {/* Button */}
          <Link href="/product">
            <Button className="bg-[#00FF66] text-white font-semibold w-full sm:w-[171px] h-[48px] sm:h-[56px] rounded-md hover:bg-[#00ff55f5] transition duration-300">
              Buy Now!
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 md:py-16 py-1 px-4 lg:px-11">
          <img
            src="/images/JBL_BOOMBOX_2_background.svg"
            alt="Background Shape"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-70"
          />
          <img
            src="/images/JBL_BOOMBOX_2.svg"
            alt="JBL Speaker"
            className="relative w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Category