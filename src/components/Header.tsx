import { Menu, Transition } from "@headlessui/react";
import cn from "classnames";
import Link from "next/link";
import { Fragment, useState } from "react";

import { navLinks, languages } from "../utils/constants";
import Brand from "./Brand";

const Header = () => {
  const [language, setLanguage] = useState<{
    name: string;
    code: string;
  }>(languages[0]);

  return (
    <header
      className={cn(
        "fixed bg-white top-0 left-0 right-0 z-50 flex w-full items-center justify-between transition-all px-5 py-6 sm:px-10 md:px-20"
      )}
    >
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 transition-all md:gap-12">
        <Brand />
        <div className="flex gap-1 md:gap-2 lg:gap-3 transition-all md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black text-[0.6rem] sm:text-[1rem] md:text-md lg:text-lg pl-2 sm:pl-2 md:pl-5 lg:pl-10 text-opacity-90 hover:text-opacity-100 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
