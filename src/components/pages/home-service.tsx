import React from "react";
import HighlightCard from "./highlight-card";
import { Truck, Headphones, RotateCcw } from "lucide-react";

const highlightData = [
  {
    Icon: Truck,
    name: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    Icon: Headphones,
    name: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    Icon: RotateCcw,
    name: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

function HomeService() {
  return (
    <section className="container mx-auto px-4 my-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightData.map((item, index) => (
          <HighlightCard
            key={index}
            Icon={item.Icon}
            name={item.name}
            description={item.description}
            nameStyle="font-semibold text-xl"
            descriptionStyle="text-sm"
            containerStyle="w-full"
          />
        ))}
      </div>
    </section>
  );
}

export default HomeService;
