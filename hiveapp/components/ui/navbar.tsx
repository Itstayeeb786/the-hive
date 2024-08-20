import React, { useState } from "react";
import Image from "next/image";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for handling menu open/close

  return (
    <div
      className={cn(
        " rounded-3xl top-0 inset-x-0 w-full z-50  bg-black bg-opacity-75",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Image
          src="/applogo.png"
          alt="Hive Logo"
          title="THE HIVE"
          width={150}
          height={20}
          priority
          className="flex items-center"
        />

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 font-bold  text-white">
          <a href="/" className="hover:text-orange-500 mt-2">
            Home
          </a>
          <a href="/businesses" className="hover:text-orange-500 mt-2">
            Businesses
          </a>
          <a href="/register" className="hover:text-orange-500 mt-2">
            Register
          </a>
          <a href="/contact">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-800 text-white text-center">
          <a
            href="/"
            className="block py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/businesses"
            className="block py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Businesses
          </a>
          <a
            href="/register"
            className="block py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </a>
          <a
            href="/contact"
            className="block py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
