import React from "react";
import Navbar from "../ui/navbar";
import Background from "./background";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col   ">
      <Background />
      <footer className="bg-black bg-opacity-70 dark:bg-gray-900 w-auto mb-auto">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Image
                    src="/applogo.png"
                    alt="Hive Logo"
                    width={240}
                    height={74}
                    priority
                    className="\text-overlay absolute lg: -ml-6 w-40 "
                  />
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-yellow-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-yellow-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-yellow-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-yellow-500 dark:text-gray-300 sm:text-center">
              © 2024 <a href="https://flowbite.com/">THE HIVE</a>. All Rights
              Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 hover:text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only ">Facebook page</span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 hover:text-blue-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.078 4.078 0 0 0 4.1 9.612a3.885 3.885 0 0 1-1.084.137 3.22 3.22 0 0 1-.779-.075 4.079 4.079 0 0 0 3.838 2.847 8.3 8.3 0 0 1-5.1 1.725A8.6 8.6 0 0 1 0 14.191 11.64 11.64 0 0 0 6.29 16.01c7.547 0 11.675-6.162 11.675-11.508 0-.175 0-.35-.013-.519A8.22 8.22 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 0 0-3.162 19.486c.5.087.682-.217.682-.484 0-.237-.01-1.022-.013-1.853-2.776.603-3.36-1.34-3.36-1.34-.454-1.153-1.109-1.46-1.109-1.46-.906-.62.068-.607.068-.607 1.001.071 1.527 1.008 1.527 1.008.89 1.518 2.341 1.08 2.91.826.092-.642.348-1.08.635-1.33-2.216-.252-4.55-1.104-4.55-4.916 0-1.086.39-1.974 1.027-2.67-.102-.252-.446-1.266.098-2.64 0 0 .839-.265 2.75 1.018A9.564 9.564 0 0 1 10 4.8c.849.004 1.705.115 2.505.338 1.91-1.283 2.748-1.018 2.748-1.018.546 1.374.202 2.388.1 2.64.64.696 1.025 1.584 1.025 2.67 0 3.822-2.339 4.661-4.567 4.907.357.305.677.913.677 1.84 0 1.328-.013 2.4-.013 2.727 0 .27.18.577.688.48A10.004 10.004 0 0 0 10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
