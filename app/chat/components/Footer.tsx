import React from "react";

const Footer: React.FC = () => {
  const links = [
    { text: "Pricing", className: "x-2.5 py-1 leading-none" },
    {
      text: "Enterprise",
      className: "px-2.5 py-1 leading-none whitespace-nowrap",
    },
    { text: "FAQ", className: "px-2.5 py-1 whitespace-nowrap" },
    { text: "Legal", className: "px-2.5 py-0.5 text-center whitespace-nowrap" },
    {
      text: "Privacy",
      className: "px-2.5 py-1 leading-none whitespace-nowrap",
    },
    {
      text: "Legacy v0",
      className: "hidden lg:flex px-2.5 py-0.5 leading-none",
    },
    { text: "Vercel", className: "flex gap-1.5 px-2.5 py-1 whitespace-nowrap" },
  ];

  return (
    <footer className="fixed bottom-0 left-0   right-0 flex flex-wrap  lg:flex-row justify-center  gap-1 mt-10 max-w-full text-xs text-black w-full py-4">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link.text === "Vercel" ? (
            <div className={link.className}>
              <span>{link.text}</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8aea8d36044f1a72302f013fc14536bf3a98b8d70d455a13666c35a7c80afbd?apiKey=2a27755d9b58497580a442835654a8d8&"
                alt=""
                className="object-contain shrink-0 w-2.5 aspect-square"
              />
            </div>
          ) : (
            <div className={link.className}>{link.text}</div>
          )}
        </React.Fragment>
      ))}
    </footer>
  );
};

export default Footer;
