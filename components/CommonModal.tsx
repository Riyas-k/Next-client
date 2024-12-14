"use state";
import React from "react";

const CommonModal = ({ heading, Desc, toggleModal, showModal }: any) => {
  return (
    <>
      {/* Modal */}
      <div
        onClick={toggleModal}
        id="default-modal"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        tabIndex={-1}
        aria-hidden={!showModal}
        className={`${
          showModal ? "flex" : "hidden"
        } fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden justify-center items-center bg-gray-300 bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5  dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">{heading}</h3>
            </div>

            {/* Modal body */}
            <div className="p-2 ml-5">
              <p className="text-start leading-relaxed text-gray-500 dark:text-gray-400">
                {Desc}
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-end justify-end p-2 md:p-5  border-gray-200  dark:border-gray-600">
              <button
                onClick={toggleModal}
                type="button"
                className="text-black border border-gray-200 bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-black rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonModal;
