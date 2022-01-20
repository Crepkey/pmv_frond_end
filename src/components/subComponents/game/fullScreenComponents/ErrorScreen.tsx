// Icons
import { IoSadOutline } from "react-icons/io5";

// Styles
import { FlexContainer, Description } from "../styles";

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
			<Description>{error}</Description>
		</FlexContainer>
	);
}
