"use client";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { Input } from "./ui/input";
import { useSearchStates } from "@/contexts/SearchContext";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search({ className }: { className?: string }) {
  const { searchValue, setSearchValue } = useSearchStates();
  const pathname = usePathname();
  const router = useRouter();
  const [searchBarValue, setSearchBarValue] = useState("");
  const handleChange = (value: string) => {
    setSearchBarValue(value);
    setSearchValue(value);
    const createSearchParams = new URLSearchParams({
      search: value,
    });
    router.push(`${pathname}?${createSearchParams.toString()}`);
  };
  return (
    <div
      className={cn("relative w-full flex flex-col justify-center", className)}
    >
      <Input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={searchBarValue}
        placeholder="Enter your search here"
        className="w-full bg-white rounded-full p-2 px-5"
      />
      <Icons.search className="absolute text-black top-0 right-0 h-full mr-2" />
    </div>
  );
}
