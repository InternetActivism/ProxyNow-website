interface Props {
  children: JSX.Element | string;
  className?: string;
}

const SetupStepText = ({ children, className }: Props) => {
  return(
    <div className={`text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line ${className}`}>
      {children}
    </div>
  );
}

export default SetupStepText;