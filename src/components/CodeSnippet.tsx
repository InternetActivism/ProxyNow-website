interface Props {
  text: string;
}

const CodeSnippet = ({ text }: Props) => {
  return (
    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line bg-gray-200 border-2 border-gray-300 p-5 rounded-md font-mono my-6">
      {text}
    </p>
  );
};

export default CodeSnippet;