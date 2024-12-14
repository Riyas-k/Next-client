"use client";
import PricingUpgrade from "@/components/PlanUpgrade";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const SearchForm = ({ onAddQuestion, status, placeholder }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onAddQuestion(searchTerm); // Add question to history without altering form UI
      router.push(`/chat/1`); // Navigate to the dynamic route
      setSearchTerm(""); // Clear input after submit
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center self-stretch mt-5 w-full text-sm leading-none whitespace-nowrap bg-white rounded-xl border border-solid border-gray-500 border-opacity-80 text-zinc-500 max-md:max-w-full"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="focus:outline-none focus:text-black focus:border-transparent p-3 rounded-t-xl bg-white text-black"
        placeholder={`${placeholder ? placeholder : "Ask vO a question..."}`}
      />
      <div className="flex flex-wrap gap-5 justify-between items-start px-3 pt-5 pb-3 w-full bg-white rounded-b-xl max-md:max-w-full">
        <div className="flex gap-2">
          <label className="cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e7bf1fc0cf4e79533d2a8e1351e5f614227b26f363f0b8f9161040ea59c4a13?apiKey=2a27755d9b58497580a442835654a8d8&"
              alt=""
              className="object-contain shrink-0 w-8 rounded-lg aspect-square"
            />
            <input type="file" onChange={() => {}} className="hidden" />
          </label>

          {!status && (
            <button
              type="button"
              className="flex gap-2 px-2.5 py-2 rounded-lg border border-dashed border-black border-opacity-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d677504b616e605ce80450e8c8e1cf2b072f9c82368c0248ba57c5f3fa66b5?apiKey=2a27755d9b58497580a442835654a8d8&"
                alt=""
                className="object-contain shrink-0 w-4 aspect-square"
              />
              <span>Project</span>
            </button>
          )}
        </div>
        <button
          type="submit"
          className={`${
            searchTerm.length > 0 ? "bg-black" : "bg-gray-200"
          } p-1 border border-gray-300 rounded-md`}
          aria-label="Submit search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill={`${searchTerm.length > 0 ? "white" : "gray"}`}
          >
            <path d="M12 2c-.3 0-.6.1-.8.3L4.3 9.2a1 1 0 1 0 1.4 1.4L11 5.4V20a1 1 0 0 0 2 0V5.4l5.3 5.2a1 1 0 1 0 1.4-1.4l-7-7A1 1 0 0 0 12 2z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

const MainContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [upgradeProfile, setUpgradeProfile] = useState(false);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

  useEffect(() => {
    // Load question history from localStorage on initial render
    const storedHistory = JSON.parse(
      localStorage.getItem("questionHistory") || "[]"
    );
    setQuestionHistory(storedHistory);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleProfileBar = () => {
    setProfileOpen(!profileOpen);
  };
  const toggleUpgradePlan = () => {
    setUpgradeProfile(!upgradeProfile);
  };

  const addQuestionToHistory = (question: string) => {
    const updatedHistory = [...questionHistory, question];
    setQuestionHistory(updatedHistory);
    localStorage.setItem("questionHistory", JSON.stringify(updatedHistory)); // Store in localStorage
  };

  return (
    <main
      onClick={() => {
        return (
          profileOpen && toggleProfileBar(), isSidebarOpen && toggleSidebar()
        );
      }}
      className={`flex relative flex-col justify-center ${
        isSidebarOpen && "lg:ml-28"
      } items-center px-20 mt-32 max-w-full text-center h-full text-zinc-900 w-[1283px] max-md:px-5 max-md:py-28 max-md:mt-10`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        profileOpen={profileOpen}
        toggleProfileBar={toggleProfileBar}
        toggleUpgradePlan={toggleUpgradePlan}
        questionHistory={questionHistory}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex relative  flex-col items-center mb-0 max-w-full w-[736px] max-md:mb-2.5`}
      >
        <h1 className="text-5xl text-black font-semibold tracking-tighter leading-loose max-md:max-w-full max-md:text-3xl">
          What can I help you ship?
        </h1>
        {upgradeProfile && (
          <div
            onClick={toggleUpgradePlan}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 bg-white p-6 rounded-lg shadow-lg max-w-[550px] w-full mx-4"
            >
              <PricingUpgrade toggleUpgradePlan={toggleUpgradePlan} />
            </div>
          </div>
        )}
        <SearchForm onAddQuestion={addQuestionToHistory} />
        <SuggestionButtons />
      </div>
    </main>
  );
};

export default MainContent;

interface SuggestionButtonProps {
  text: string;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({ text }) => (
  <button className="flex gap-0.5 px-2 py-1 rounded-full border border-solid bg-neutral-50 border-black border-opacity-10">
    <span className="grow my-auto">{text}</span>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/52dd52764f1f7e46d6a45a6ff7438ce9f3b0ef0a056d1d0d2bac0018184e4300?apiKey=2a27755d9b58497580a442835654a8d8&"
      alt=""
      className="object-contain shrink-0 w-4 aspect-square"
    />
  </button>
);

export const SuggestionButtons: React.FC = () => {
  const suggestions = [
    "Generate a sticky header",
    "How can I schedule cron jobs?",
    "Calculate the factorial of a number",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5 max-w-full text-xs leading-none w-[626px]">
      {suggestions.map((suggestion, index) => (
        <SuggestionButton key={index} text={suggestion} />
      ))}
    </div>
  );
};
