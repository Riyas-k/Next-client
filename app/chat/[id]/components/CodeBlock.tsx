"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa";

function CodeBlock({ code, language = "javascript" }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative rounded-md overflow-hidden shadow-md">
      <div className="border h-full">
        <h1 className="text-black text-start ml-2 lg:ml-10">/app/posts/[id]/page.tsx</h1>
        <button
          onClick={handleCopy}
          className="absolute top-0 right-2  text-white p-1 rounded hover:bg-gray-200"
        >
          {copied ? <FaCheck color="gray"/> : <FaRegCopy color="gray"/>}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={prism} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
