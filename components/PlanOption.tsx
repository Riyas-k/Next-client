import React from "react";

interface PlanOptionProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const PlanOption: React.FC<PlanOptionProps> = ({
  name,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer py-2 px-0 lg:px-4 rounded-md ${
        isSelected ? "lg:bg-white lg:border text-black" : " text-gray-500"
      }`}
    >
      <h2 className="font-semibold text-sm">{name}</h2>
    </div>
  );
};

export default PlanOption;
