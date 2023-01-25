import { Step } from "../utils/constants";
import SetupStepText from "./SetupStepText";

interface Props {
  step: number;
  stepData: Step;
  children?: JSX.Element;
}

const SetupStep = ({ step, stepData, children }: Props) => {
  return(
    <div className="flex flex-row w-full px-4 pb-0 pt-10 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
        <div className="flex items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 lg:p-2 rounded-full text-center">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">{step}</p>
        </div>

        <div className="pl-5 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black pb-4 w-full">{stepData.title}</h1>
            <SetupStepText className="pb-5">{stepData.body}</SetupStepText>
            {children}
        </div>
    </div>
  );
};

export default SetupStep;