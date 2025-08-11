"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  HeartIcon,
  MoonIcon,
  SearchIcon,
  ShoppingCartIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

const NavAction = ({ style }: { style?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={"flex flex-wrap-reverse sm:gap-6 gap-3" + (style ? ` ${style}` : "")}>
      <div className="flex items-center min-w-64 px-2 rounded-sm sm:px-3 bg-input/30">
        <Input
          type="search"
          placeholder="What are you looking for?"
          className={cn(
            "border-none outline-none rounded-none shadow-none",
            "focus-visible:border-none focus-visible:ring-[0px]"
          )}
        />
        <SearchIcon />
      </div>
      <div className="flex items-center gap-4">
        <HeartIcon className="w-6 h-6" />
        <Button variant="ghost" onClick={() => (window.location.href = "/cart")}>
          <ShoppingCartIcon className="w-6 h-6" />
        </Button>
        {
          <button
            onClick={() =>
              setTheme((theme) => (theme === "dark" ? "light" : "dark"))
            }
            className="p-2 cursor-pointer rounded-full hover:bg-muted transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        }
      </div>
    </div>
  );
};

export default NavAction;
