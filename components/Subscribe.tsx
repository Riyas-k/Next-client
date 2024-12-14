"use client";
import React from "react";

const SubscribeModal = ({ setIsOpen, isOpen }: any) => {
  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={!isOpen}
          className=" z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
        >
          <div className="relative  w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative rounded-lg  bg-white">
              {/* Modal header */}
              <div className="flex items-center justify-between  rounded-t ">
                <h3 className="text-xl font-semibold ml-3 text-gray-900 ">
                  Subscribe to Premium
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="w-full max-w-lg mx-auto p-4 text-start">
                <div className="bg-white rounded-lg ">
                  <form>
                    <div className="space-y-2">
                      {/* Full-width Card Number */}
                      <div>
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="card-number"
                          id="card-number"
                          placeholder="0000 0000 0000 0000"
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      {/* Expiration Date and CVV in the same row */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="expiration-date"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            name="expiration-date"
                            id="expiration-date"
                            placeholder="MM / YY"
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cvv"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Security Code
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            id="cvv"
                            placeholder="000"
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Country dropdown */}
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Country
                        </label>
                        <select
                          name="country"
                          defaultValue="in"
                          id="country"
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none "
                        >
                          <option value="" className="text-gray-400">
                            Select
                          </option>
                          <option value="in">India</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                          {/* Add more country options as needed */}
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-wrap text-start text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  By clicking on Confirm you&apos;ll start your Premium plan
                  subscription of{" "}
                  <span className="text-black font-medium">$20/month</span>,
                  with a renewal date of the{" "}
                  <span className="text-black font-medium">
                    {" "}
                    14th of each month
                  </span>
                  .
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex gap-2 lg:gap-0 flex-col lg:flex-row justify-between items-center p-4 md:p-5  border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="text-black w-full lg:w-[30%] bg-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="py-2.5 px-5 ms-3 w-full lg:w-[40%] text-sm font-medium text-white bg-black  rounded-lg "
                >
                  Add Card and Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
