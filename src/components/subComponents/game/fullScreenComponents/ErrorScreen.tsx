// Icons
import { IoSadOutline } from "react-icons/io5";

// Styles
import { FlexContainer, Description } from "../styles";

// Components
import Question from "../../practiceWords/Question";
import Button from "src/components/generalComponents/Button";
interface ErrorScreenProps {
	error: string;
	restartGame: () => void;
}

export default function ErrorScreen({ error, restartGame }: ErrorScreenProps) {
	return (
		<FlexContainer>
			<IoSadOutline size={100} />

			<Question text={"Sorry, you can't play!"} />
			<Description>{error}</Description>

			<Button title="Choose different amount" onClick={restartGame} color="blue" />
		</FlexContainer>
	);
}
