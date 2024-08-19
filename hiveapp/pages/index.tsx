"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Background from "@/components/wrappers/background";
import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 sm:p-24 ${inter.className}`}
    >
      <Navbar className="-mt-16  " />
      <Background />

      <div className="relative flex flex-col items-center mt-6 sm:mt-12">
        <Image
          src="/lmao2.jpeg"
          alt="Next.js Logo"
          width={1720}
          height={24}
          priority
          className="rounded-xl sm:rounded-2xl"
        />
        <Image
          src="/hive.png"
          alt="Hive Logo"
          width={140}
          height={54}
          priority
          className="top-6 right-0 text-overlay absolute "
        />
        <p className="text-overlay absolute top-16 sm:top-24 right-10 sm:right-40 text-3xl sm:text-7xl text-white font-extrabold">
          THE HIVE
        </p>
        <div className="text-overlay absolute bottom-0 right-0 flex flex-col sm:flex-row">
          <a
            href="/register"
            className="pt-5 group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30 mb-4 sm:mb-10 w-full sm:w-56 text-center"
          >
            <h2 className="mb-3 text-lg sm:text-2xl font-semibold text-white">
              Sign Up{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              Create Your Account to view, review, and also post your Business!
            </p>
          </a>
          <a
            href="3"
            className="pt-5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-orange-300 hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30 mb-10 w-full sm:w-96 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-lg sm:text-2xl font-semibold text-white">
              Access User Dashboard{" "}
              <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              Sign in or go to your user dashboard if already signed in and view
              your business
            </p>
          </a>
        </div>
      </div>

      <FeaturesSectionDemo />

      <p className="mt-24  left-0 top-0 flex w-full justify-center border-b border-orange-900 lg:static lg:w-auto lg:rounded-xl lg:border text-white lg:p-4 lg:dark:bg-zinc-800/30 font-bold bg-black bg-opacity-60 text-sm sm:text-base ">
        View Businesses
      </p>

      <div className=" bg-white bg-blur-2xl bg-opacity-70 rounded-md shadow-2xl mt-16 container mx-auto px-4   pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Reliance Ventures
            </h2>
            <p className="text-black">Kenya, Zambia, Lesotho</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">Anga Cinemas</h2>
            <p className="text-black">Kenya, Tanzania</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Playroom Africa
            </h2>
            <p className="text-black">Kenya, Uganda, Algeria</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Zero Trust Africa
            </h2>
            <p className="text-black">Kenya, Ethiopia, India</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">
              FinSense Africa
            </h2>
            <p className="text-black">Kenya</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">Shariah AI</h2>
            <p className="text-black">Kenya, Middle east, India</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">Startup Kenya</h2>
            <p className="text-black">Kenya, Africa in general</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <div
            className="bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-md "
            style={{ backgroundImage: "url('tiles.jpg') " }}
          >
            <div className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">AICTC</h2>
            <p className="text-black">Kenya, Ghana, Senegal</p>
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
              View
            </button>
          </div>
          <a href="/businesses">
            <button className="bg-gray-600 hover:bg-black hover:text-white  text-white font-bold py-2 px-4 rounded mt-4">
              View More
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
