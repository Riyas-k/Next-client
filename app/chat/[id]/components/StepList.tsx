import React from "react";

interface Step {
  title: string;
  description: string;
  subSteps?: string[];
}

interface StepListProps {
  steps: Step[];
  title:string;
  subtitle:string;
}

export const StepList: React.FC<StepListProps> = ({ steps,title,subtitle }) => {
  return (
    <ol className="flex flex-col  items-start px-3 max-md:max-w-full list-decimal">
      <div className="flex gap-2">
            <img
              className={` h-10 w-10  md:flex`}
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
              alt="profile icon"
            />
            <h1 className="self-start text-md mt-2">{title}</h1>
          </div>
          <p className="mt-8 leading-5 tex-sm max-md:max-w-full">{subtitle}</p>
      {steps.map((step, index) => (
        <li key={index} className="mt-5 ml-5 max-md:ml-2.5">
          <h2 className="text-sm leading-none">{step.title}</h2>
          <p className="mt-6 ml-6 max-md:ml-2.5">{step.description}</p>
          {step.subSteps && (
            <ol className="mt-5 ml-7 list-decimal">
              {step.subSteps.map((subStep, subIndex) => (
                <li key={subIndex} className="mt-2.5 text-sm">
                  {subStep}
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
      {/* <li className="mt-2.5 text-sm">
        <button className="text-xs">Ask a follow up ...</button>
      </li>
      <li className="mt-6 max-md:ml-2">0</li> */}
    </ol>
  );
};
