"use client";
import React, { useState } from "react";
import PlanOption from "./PlanOption";
import ActionButtons from "./ActionButtons";
import SubscribeModal from "./Subscribe";

interface PlanData {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const planData: PlanData[] = [
  {
    name: "Free",
    price: "$0 /user/month",
    description: "For individuals:",
    features: ["Access to vO.dev/chat"],
  },
  {
    name: "Premium",
    price: "$20 /user/month",
    description: "For individuals:",
    features: ["Access to vO.dev/chat"],
  },
  {
    name: "Team",
    price: "$30 /user/month",
    description: "For teams:",
    features: ["Access to vO.dev/chat"],
  },
  {
    name: "Enterprise",
    price: "$50 /user/month",
    description: "For enterprises:",
    features: ["Access to vO.dev/chat", "Dedicated support"],
  },
];
const PricingUpgrade = ({ toggleUpgradePlan }: any) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(0);
  const selectedPlan =
    selectedPlanIndex !== null ? planData[selectedPlanIndex] : null;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <section className=" flex flex-col items-start md:py-7 md:pr-14 pl-6 text-black  bg-white  md:max-w-[550px] max-md:px-5">
          <header>
            <h1 className="text-lg font-bold text-start">Upgrade Plan</h1>
            <p className="mt-3 text-sm">
              You&apos;re currently on the vO Free plan.
            </p>
          </header>

          <div className="flex gap-5 justify-between items-center w-full max-w-full mt-7  bg-gray-50 p-4 border border-gray-200 rounded-md">
            {planData.map((plan, index) => (
              <PlanOption
                key={index}
                name={plan.name}
                isSelected={index === selectedPlanIndex}
                onClick={() => setSelectedPlanIndex(index)}
              />
            ))}
          </div>

          {selectedPlan && (
            <div className="w-full justify-start text-start mt-5 bg-gray-50 p-6 border border-gray-200 rounded-md">
              <p className="text-base font-semibold">{selectedPlan.price}</p>
              <p className="mt-3">{selectedPlan.description}</p>
              {selectedPlan.features.map((feature, index) => (
                <p key={index} className="mt-2">
                  {feature}
                </p>
              ))}
            </div>
          )}

          <footer className="w-full mt-10">
            <p className="text-xs flex gap-1 justify-center">
              Compare plans and options on our{" "}
              <span className="text-blue-400 flex">
                {" "}
                pricing page{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8aea8d36044f1a72302f013fc14536bf3a98b8d70d455a13666c35a7c80afbd?apiKey=2a27755d9b58497580a442835654a8d8&"
                  alt=""
                />
              </span>
            </p>
            <ActionButtons
              toggleUpgradePlan={toggleUpgradePlan}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </footer>
        </section>
      ) : (
        <SubscribeModal setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </>
  );
};

export default PricingUpgrade;
