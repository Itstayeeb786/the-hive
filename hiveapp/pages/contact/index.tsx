import Navbar from "@/components/ui/navbar";
import Background from "@/components/wrappers/background";

const Contact = () => {
  return (
    <main className="p-6 sm:p-24">
      <div>
        <Navbar className="-mt-16" />
        <div className="flex justify-center items-center mt-36 ">
          <div className="bg-black opacity-80 w-full max-w-2/3xl p-6 rounded-3xl  ">
            <form className=" rounded-md ">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Flowbite"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Unique visitors (per month)
                  </label>
                  <input
                    type="number"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="text-box"
                  className="block mb-2 font-medium text-white dark:text-white"
                >
                  Reason For Contact
                </label>
                <textarea
                  id="text-box"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="Enter text here"
                />
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className=" bg-orange-600 w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-red-300 dark:bg-orange-700 dark:border-orange-600 dark:focus:ring-orange-600 dark:ring-orange-600"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-orange-600 hover:underline dark:text-orange-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-orange-600 hover:bg-white hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 opacity-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
