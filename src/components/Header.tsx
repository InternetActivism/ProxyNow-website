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
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center gap-2 text-lg font-semibold text-black">
            {language.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right overflow-hidden divide-y divide-gray-100 rounded bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              {languages.map((lang) => (
                <Menu.Item key={lang.code}>
                  <button
                    className="group flex w-full items-center px-2 py-2 text-base bg-white hover:bg-gray-100 transition-all"
                    onClick={() => setLanguage(lang)}
                  >
                    {lang.name}
                  </button>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
