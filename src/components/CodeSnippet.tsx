import { useState } from "react";
import { BiCopy } from "react-icons/bi";

interface Props {
  text: string;
}

const CodeSnippet = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line bg-gray-200 border-2 border-gray-300 p-5 rounded-md font-mono my-6 relative">
      {copied ? (
        <span className="absolute right-2 top-2">Copied!</span>
      ) : (
        <BiCopy
          className=" hover:bg-gray-300 h-10 w-10 p-1 rounded-md hover:cursor-pointer absolute right-2 align-middle top-2"
          onClick={() => {
            navigator.clipboard.writeText(text.split("~").join("\n"));
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        />
      )}
      <p>
        {text.split("~").map((line, i) => (
          <span
            key={i}
            className={line.trim().startsWith("#") ? "text-gray-500" : ""}
          >
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default CodeSnippet;
