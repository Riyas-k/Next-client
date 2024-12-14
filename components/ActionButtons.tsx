import React from "react";

const ActionButtons = ({ toggleUpgradePlan, setIsOpen, isOpen }: any) => {
  return (
    <div className="flex gap-5 self-end mt-14 max-md:mt-10 justify-end">
      <button
        onClick={() => toggleUpgradePlan()}
        className="text-sm p-3 bg-gray-100 shadow-lg text-black rounded-md"
      >
        Cancel
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm p-3 bg-black shadow-lg text-white rounded-md"
      >
        Current Plan
      </button>
    </div>
  );
};

export default ActionButtons;
