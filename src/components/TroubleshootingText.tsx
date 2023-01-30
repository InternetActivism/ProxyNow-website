interface Props {
    body: string;
}

const TroubleshootingText = ({ body }: Props) => {
    return(
        <p className={`text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 whitespace-pre-line`}>
            {body}
        </p>
    );
};

export default TroubleshootingText;