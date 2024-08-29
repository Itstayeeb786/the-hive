import Navbar from "@/components/ui/navbar";
import Background from "@/components/wrappers/background";
import Footer from "@/components/wrappers/footer";

const Businesses = () => {
  return (
    <main className="p-6 sm:p-24">
      <div className="-mt-16">
        <Navbar className="mt-4" />
        <p className="mt-24  left-0 top-0 flex w-full justify-center border-b border-orange-900 lg:static lg:w-auto lg:rounded-xl lg:border text-white lg:p-4 lg:dark:bg-zinc-800/30 font-bold bg-black bg-opacity-60 text-sm sm:text-base ">
          View Businesses
        </p>

        <div className=" bg-gray-200 bg-blur-2xl bg-opacity-70 rounded-md shadow-2xl mt-16 container mx-auto px-4   pb-6 pt-8  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30 ">
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
              <h2 className="text-lg sm:text-xl font-bold mt-4">
                Anga Cinemas
              </h2>
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
              <h2 className="text-lg sm:text-xl font-bold mt-4">
                Startup Kenya
              </h2>
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
              <h2 className="text-lg sm:text-xl font-bold mt-4">
                Anga Cinemas
              </h2>
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
              <h2 className="text-lg sm:text-xl font-bold mt-4">
                Startup Kenya
              </h2>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Businesses;
