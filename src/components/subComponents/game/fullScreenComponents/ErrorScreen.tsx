// Icons
import { IoSadOutline } from "react-icons/io5";

// Styles
import { FlexContainer, ErrorMessage } from "../styles";

// Components
import Question from "../../practiceWords/Question";
interface ErrorScreenProps {
	error: string;
}

export default function ErrorScreen({ error }: ErrorScreenProps) {
	return (
		<FlexContainer>
			<IoSadOutline size={100} />

			<Question text={"Sorry, you can't play!"} />
			<ErrorMessage>{error}</ErrorMessage>
		</FlexContainer>
	);
}
