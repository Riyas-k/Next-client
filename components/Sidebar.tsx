"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CommonModal from "./CommonModal";
import { useRouter } from "next/navigation";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  profileOpen,
  toggleProfileBar,
  toggleUpgradePlan,
  questionHistory,
}: any) => {
  const maxLength = 13; // The maximum number of characters you want to show
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const togglePopup = () => {
    setshowPopup(!showPopup);
  };
  const router = useRouter();

  const navigateToChat = (index: number = 0) => {
    router.push(`/chat`);
  };
  // Truncate and add ellipsis if the text is longer than the max length
  const truncatedText = (longText: string) =>
    longText.length > maxLength
      ? longText.substring(0, maxLength) + "..."
      : longText;
  const displayedQuestions = questionHistory.slice(0, 4);
  const hasMoreQuestions = questionHistory.length > 4;
  return (
    <div>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          aria-controls="separator-sidebar"
          type="button"
          className="p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 fixed top-0 left-0 z-50"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        onClick={() => profileOpen && toggleProfileBar()}
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-[100]  h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-14"
        } sm:translate-x-0 text-center`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <ul className="space-y-2 font-medium">
            <li className="flex flex-row justify-between">
              <Image
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/976px-Apple_logo_black.svg.png?20220821121934"
                alt="Logo"
              />

              {isSidebarOpen && (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="black"
                  onClick={toggleSidebar}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </li>
            {/* Add other sidebar items here */}
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-white dark:border-gray-700">
            <li className=" rounded-md">
              {/* <Link href="/chat"> */}
              {!isSidebarOpen ? (
                <svg
                  onClick={() => navigateToChat()}
                  className="w-6 h-6 ml-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16M4 12h16"
                  />
                </svg>
              ) : (
                <div className="ml-2">
                  <div
                    onClick={() => navigateToChat()}
                    className="border cursor-pointer border-gray-300 bg-white p-1 shadow-lg text-black rounded-2xl"
                  >
                    <p> New Chat</p>
                  </div>
                  <h1 className="text-start mt-5 text-sm text-gray-600">
                    Recent Chats
                  </h1>
                  {displayedQuestions?.map(
                    (question: string, index: number) => (
                      <div className="m-2" key={index}>
                        <Link
                          href={`/chat/${index}`}
                          className="flex justify-between group"
                        >
                          <h1 className="text-start text-sm text-gray-600">
                            {truncatedText(question)}
                          </h1>
                          <svg
                            onClick={(e) => {
                              return (
                                e.stopPropagation(),
                                e.preventDefault(),
                                toggleModal()
                              );
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-three-dots opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                          </svg>
                        </Link>
                      </div>
                    )
                  )}

                  {hasMoreQuestions && (
                    <div className="mt-4 flex items-start justify-start gap-2 text-gray-500">
                      <Link href="#">
                        <button className="flex gap-2 items-start text-sm font-medium">
                          View All
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right mt-1"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {/* </Link> */}
            </li>
          </ul>
          <div className="flex flex-col fixed bottom-5 w-full">
            <>
              {!isSidebarOpen && (
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/collapse-2511427-2103355.png?f=webp&w=512"
                  alt="Collapse Icon"
                  className={`h-6 w-6 ml-2 hidden md:flex`}
                  onClick={toggleSidebar}
                />
              )}
              <div className="flex flex-row" onClick={() => toggleProfileBar()}>
                <img
                  className={` mt-5 h-10 w-10  ${
                    isSidebarOpen ? "flex" : "hidden"
                  } md:flex`}
                  src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                  alt="profile icon"
                />
                {isSidebarOpen && (
                  <div className="flex flex-row justify-between w-full">
                    <h5 className="mt-7">Klen Mack</h5>
                    <svg
                      className="mt-7 w-6 h-6 mr-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L128 370.7 128 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96zm352-333.3c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L448 141.3 448 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          </div>
        </div>
      </aside>
      {showPopup && (
        <CommonModal
          heading={heading}
          Desc={desc}
          toggleModal={togglePopup}
          showModal={showPopup}
        />
      )}
      {showModal && (
        <>
          <div
            id="select-modal"
            tabIndex={1}
            aria-hidden={!showModal}
            className={`${
              showModal ? "block" : "hidden"
            } overflow-y-auto overflow-x-hidden mt-14  fixed top-20 left-64 z-50 justify-center items-start w-[250px] h-[calc(100%-1rem)] max-h-full`}
          >
            <div className="relative  w-full max-w-md max-h-full ">
              <div className="relative bg-white rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between  "></div>
                <div className="">
                  <ul className="space-y-0">
                    <li>
                      <input
                        type="radio"
                        id="job-1"
                        name="job"
                        value="job-1"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="job-1"
                        onClick={() => {
                          return (
                            toggleModal(),
                            togglePopup(),
                            setDesc("Bluetooth connection Windows"),
                            setHeading("Rename Chat")
                          );
                        }}
                        className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                      >
                        <div className="block">
                          <div className="w-full text-sm">Rename</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="job-2"
                        name="job"
                        value="job-2"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="job-2"
                        className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                      >
                        <div className="block">
                          <div className="w-full text-sm">Favorite</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="job-3"
                        name="job"
                        value="job-3"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="job-3"
                        onClick={() => {
                          return (
                            toggleModal(),
                            togglePopup(),
                            setDesc(
                              "The chat will be deleted and removed from your chat history"
                            ),
                            setHeading("Delete Chat")
                          );
                        }}
                        className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                      >
                        <div className=" flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            className="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                          <div className="w-full text-sm">Delete</div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {profileOpen && (
        <div className="fixed bottom-0 right-40 lg:w-[20%]  sm:left-0 lg:left-10 m-4 max-w-sm z-[100]">
          <div className="rounded-lg border bg-white px-8 pt-8 pb-5 shadow-lg">
            <p className="text-gray-400 text-start">sample@gmail.com</p>
            <div className="flex gap-2">
              <img
                className={` mt-3 h-10 w-10 lg:flex`}
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                alt="profile icon"
              />
              <h1 className="mt-3 my-1 text-center text-md font-bold leading-8 text-gray-900">
                Klen Mack
              </h1>
            </div>
            <ul className="mt-3 divide-y rounded  py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Billing</span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Sign Out</span>
              </li>
            </ul>
            <ul className="mt-3 divide-y rounded  py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Theme</span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Language</span>
              </li>
            </ul>
            <button
              onClick={() => toggleUpgradePlan()}
              className="bg-black text-white w-full rounded-md p-3 mt-2"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
