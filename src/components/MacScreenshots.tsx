import Image from "next/image";
import finder from "../assets/macos_finder.png";
import terminal from "../assets/macos_terminal.png";

const MacScreenshots = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:-mx-56 max-w-screen">
      <Image
        className="rounded-lg w-10/12 md:w-4/12 md:mx-12 mx-0"
        src={finder}
        alt="MacOS Finder"
        style={{ objectFit: "contain" }}
      />
      <Image
        className="hidden md:block"
        src="/arrow.svg"
        alt="Arrow"
        width={100}
        height={50}
      />
      <Image
        className="w-full md:w-2/5"
        src={terminal}
        alt="MacOS Terminal"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default MacScreenshots;
