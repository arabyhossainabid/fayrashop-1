import HighlightCard from "@/components/pages/highlight-card";
import Image from "next/image";
import { Store, BadgeDollarSign, HandCoins, ShoppingBag } from "lucide-react";
import HomeService from "@/components/pages/home-service";
import AboutCarousel from "@/components/ui/about-carousel";

const highlightData = [
  {
    Icon: Store,
    number: "10.5k ",
    description: "Sallers active our site",
  },
  {
    Icon: BadgeDollarSign,
    number: "33k",
    description: "Mopnthly Produduct Sale",
  },
  {
    Icon: HandCoins,
    number: "45.5k",
    description: "Customer active in our site",
  },
  {
    Icon: ShoppingBag,
    number: "25k",
    description: "Anual gross sale in our site",
  },
];
const About = () => {
  return (
    <section className="container mx-auto px-4">
      {/* Section 1: Our Story */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
        <div className="w-full lg:w-[525px]">
          <h1 className="font-semibold text-5xl md:text-6xl pb-10">Our Story</h1>
          <p className="font-normal text-base pb-6">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="font-normal text-base">
            Exclusive offers more than 1 million products and is growing rapidly. We provide a diverse assortment across categories ranging from electronics to daily essentials.
          </p>
        </div>
        <div>
          <Image
            src="/images/story.svg"
            alt="Our Story Side Image"
            width={705}
            height={609}
            className="w-full lg:h-[609px] h-auto object-cover object-center"
          />
        </div>
      </div>
      {/* Section 2: SERVICE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
        {highlightData.map((item, index) => (
          <div className="border p-4 rounded hover:bg-[#DB4444]  hover:text-white" key={index}>
            <HighlightCard
              key={index}
              Icon={item.Icon}
              number={item.number}
              description={item.description}
              nameStyle="font-semibold text-xl"
              descriptionStyle="text-sm"
              containerStyle="w-full broder "
            />
          </div>
        ))}
      </div>
      {/* Section 2: carousel */}
      <div className="mt-32">
        <AboutCarousel />
      </div>
      {/* Section 4:  CUSTOMER SERVICE */}
      <div>
        <HomeService />
      </div>
    </section>
  );
};

export default About;
