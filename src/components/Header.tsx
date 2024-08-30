"use client";

import { IMAGES, ROUTES } from "@/lib/constant";
import { refreshAuthToken } from "@/lib/services/auth-token";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Search from "./Search";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  useEffect(() => {
    refreshAuthToken();
  }, []);
  return (
    <header
      className={cn(
        "min-h-16 bg-primary-accent1 sticky top-0 shadow-xl flex py-3 items-center justify-end",
        pathname === ROUTES.SEARCH_ROUTE && "lg:justify-between"
      )}
    >
      <Link
        href={ROUTES.HOME_ROUTE}
        className={cn(
          "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2",
          pathname === ROUTES.SEARCH_ROUTE && "hidden lg:block"
        )}
      >
        <Image src={IMAGES.LOGO} alt="Sample Tunes" width={200} height={200} />
      </Link>
      {pathname === ROUTES.SEARCH_ROUTE && (
        <div className="w-[80%] sm:w-1/2 lg:w-1/3 px-4">
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
