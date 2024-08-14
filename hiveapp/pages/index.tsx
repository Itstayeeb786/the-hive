"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Background from "@/components/wrappers/background";
import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3";

const inter = Inter({ subsets: ["latin"] });
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar className=" top-3 " />
      <Background />

      <div className="relative flex place-items-center mt-12">
        <Image
          src="/lmao2.jpeg"
          alt="Next.js Logo"
          width={1080}
          height={37}
          priority
          className="rounded-2xl"
        />
        <Image
          src="/hive.png"
          alt="Hive Logo"
          width={190}
          height={74}
          priority
          className="top-6 right-0 text-overlay absolute "
        />
        <p className="text-overlay absolute top-24 right-40 text-7xl text-white  font-extrabold ">
          THE HIVE
        </p>
        <div className="text-overlay absolute bottom-0 right-0 flex ">
          <a
            href="3"
            className="pt-5 group rounded-lg border border-transparent transition-colors hover:border-gray-300  hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30 mb-10 w-56"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={` mb-3 text-2xl font-semibold text-white`}>
              Sign Up{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-white`}>
              Create Your Account to view, review and also post your Business!
            </p>
          </a>
          <a
            href="3"
            className=" pt-5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-orange-300  hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30 mb-10 w-96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              Access User Dashboard{" "}
              <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-white`}>
              Sign-in or go to your user dashboard if already signed and view
              your business
            </p>
          </a>
        </div>
      </div>
      <FeaturesSectionDemo />

      <p className="mt-24 fixed left-0 top-0 flex w-full justify-center border-b border-orange-900  lg:static lg:w-auto  lg:rounded-xl lg:border text-white lg:p-4 lg:dark:bg-zinc-800/30 font-bold bg-black bg-opacity-60  ">
        View Businesses
      </p>
      <div className="mt-16 container mx-auto px-4  border-gray-300 bg-gradient-to-b from-orange-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30 bg-black bg-opacity-60 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Reliance Ventures</h2>
            <p className="text-yellow-200">Kenya, Zambia, Lesotho</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Anga Cinemas</h2>
            <p className="text-yellow-200">Kenya, Tanzania</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Playroom Africa</h2>
            <p className="text-yellow-200">Kenya, Uganda, Algeria</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Zero Trust Africa</h2>
            <p className="text-yellow-200">Kenya, Ethiopia, India</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">FinSense Africa</h2>
            <p className="text-yellow-200">Kenya</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Shariah AI</h2>
            <p className="text-yellow-200">Kenya, Middle east, India</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">Startup Kenya</h2>
            <p className="text-yellow-200">Kenya, Africa in general</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-xl font-bold mt-4">AICTC</h2>
            <p className="text-yellow-200">Kenya, Ghana, Senegal</p>
            <button className="bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <a href="/businesses">
            <button className="bg-gray-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
              View More
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
