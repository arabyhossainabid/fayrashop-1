import Arrival from "@/components/pages/arrival";
import Categories from "@/components/pages/categories";
import Category from "@/components/pages/category";
import Hero from "@/components/pages/hero/hero";
import HomeService from "@/components/pages/home-service";
import BestSales from "@/components/pages/products/best-sales";
import FlashSales from "@/components/pages/products/flash-sales";

export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSales />
      <Category />
      <Arrival />
      <HomeService />
    </div>
  );
}
