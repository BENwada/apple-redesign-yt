import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="" className="headerLink">
          Product
        </a>
        <a href="" className="headerLink">
          Explore
        </a>
        <a href="" className="headerLink">
          Support
        </a>
        <a href="" className="headerLink">
          Business
        </a>
      </div>
      <div className="">
        <SearchIcon className="headerLink" />
      </div>
    </header>
  );
};

export default Header;
