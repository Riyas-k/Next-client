// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ id: string }>
//   }) {
//     const id = (await params).id
//     return <div className="text-white">My Post: {id}</div>
//   }
"use client";
import React, { useEffect, useState } from "react";
import { BluetoothConnectionGuide } from "./components/BluetoothConnectionGuide";
import Sidebar from "@/components/Sidebar";
import PricingUpgrade from "@/components/PlanUpgrade";

const bluetoothSteps = [
  {
    title: "Open Bluetooth Settings",
    description:
      "To begin, you need to access the Bluetooth settings in Windows:",
    subSteps: [
      "Click on the Start menu or press the Windows key.",
      'Type "Bluetooth" in the search bar.',
      'Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.',
    ],
  },
  {
    title: "Turn on Bluetooth",
    description: "Ensure that Bluetooth is enabled on your Windows device:",
    subSteps: [
      'In the Bluetooth & other devices settings window, look for the "Bluetooth" toggle switch.',
      "If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.",
    ],
  },
  {
    title: "Turn on Bluetooth",
    description: "Ensure that Bluetooth is enabled on your Windows device:",
    subSteps: [
      'In the Bluetooth & other devices settings window, look for the "Bluetooth" toggle switch.',
      "If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.If it's off, click to turn it on. The switch should turn blue when it's on.",
    ],
  },
  {
    title: "Open Bluetooth Settings",
    description:
      "To begin, you need to access the Bluetooth settings in Windows:",
    subSteps: [
      "Click on the Start menu or press the Windows key.",
      'Type "Bluetooth" in the search bar.',
      'Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.Click on "Bluetooth and other devices settings" in the search results.',
    ],
  },
];

const App: React.FC = () => {
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
  return (
    <main
      className="bg-white"
      onClick={() => {
        return (
          profileOpen && toggleProfileBar(), isSidebarOpen && toggleSidebar()
        );
      }}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        profileOpen={profileOpen}
        toggleProfileBar={toggleProfileBar}
        toggleUpgradePlan={toggleUpgradePlan}
        questionHistory={questionHistory}
      />
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
      <BluetoothConnectionGuide
        title="how to connect bluetooth in windows"
        subtitle="VØ I'll guide you through the process of connecting  a Bluetooth device in Windows. Here's a step-by-step explanation:"
        steps={bluetoothSteps}
        isSidebarOpen={isSidebarOpen}
      />
     
    </main>
  );
};

export default App;
