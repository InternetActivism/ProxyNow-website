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
        "fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between transition-all px-4 py-6 md:px-20"
      )}
    >
      <div className="flex items-center gap-6 transition-all md:gap-12">
        <Brand />
        <div className="flex text-lg gap-3 transition-all md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black pl-5 text-opacity-90 hover:text-opacity-100 transition-all"
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
