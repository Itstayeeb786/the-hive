import Image from "next/image";
import { Inter } from "next/font/google";
import Background from "@/components/wrappers/background";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Background />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/hive.png"
          alt="Hive Logo"
          width={100}
          height={24}
          priority
        />
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Home | About | View Businesses | Register | Sign Up
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login{" "}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <Image
          src="/lmao2.jpeg"
          alt="Next.js Logo"
          width={1080}
          height={37}
          priority
        />
        <Image
          src="/hive.png"
          alt="Hive Logo"
          width={190}
          height={74}
          priority
          className="top-6 right-0 text-overlay absolute "
        />
        <p className="text-overlay absolute top-24 right-40 text-7xl font-bold ">
          THE HIVE
        </p>
        <div className="text-overlay absolute bottom-0 right-0 flex ">
          <a
            href="3"
            className="pt-5 group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sign Up{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Create Your Account to view, review and also post your Business!
            </p>
          </a>
          <a
            href="3"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-orange-300 hover:bg-gray-100 hover:dark:border-neutral-10 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Access User Dashboard{" "}
              <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Sign-in or go to your user dashboard if already signed and view
              your business
            </p>
          </a>
        </div>
      </div>

      <p className="mt-24 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-bold ">
        View Businesses
      </p>
      <div className="mt-16 container mx-auto px-4  border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
          <button className="bg-gray-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded mt-4">
            View More
          </button>
        </div>
      </div>
    </main>
  );
}
