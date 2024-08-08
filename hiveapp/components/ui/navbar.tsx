import React, { useState } from "react";
import Image from "next/image";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("top-10 inset-x-0 w-9/12 mx-auto z-50 ", className)}>
      <Menu setActive={setActive}>
        <Image
          src="/applogo.png"
          alt="Hive Logo"
          title="THE HIVE"
          width={150}
          height={20}
          priority
          className=" items-center "
        />
        <a href="/" className="mt-5 font-bold">
          Home
        </a>
        <MenuItem setActive={setActive} active={active} item="Businesses">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/">Web Development</HoveredLink>
            <HoveredLink href="/">Interface Design</HoveredLink>
            <HoveredLink href="/">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Register">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/">Hobby</HoveredLink>
            <HoveredLink href="/">Individual</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>
            <HoveredLink href="/">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3">
          Contact Us
        </button>
      </Menu>
    </div>
  );
}

export default Navbar;
