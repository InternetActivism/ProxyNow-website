interface Props {
  children: string;
  className?: string;
}

const SetupStepText = ({ children, className }: Props) => {
  return(
    <p className={`text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line ${className}`}>
      {children}
    </p>
  );
}

export default SetupStepText;