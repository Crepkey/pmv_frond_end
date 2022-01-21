// Styles
import { FlexContainer } from "../../game/styles";

// Components
import Button from "src/components/generalComponents/Button";
import Question from "../../practiceWords/Question";

// Icons
import { IoMdRefresh } from "react-icons/io";

interface FinalScreenProps {
	restartGame: () => void;
}

export default function FinalScreen({ restartGame }: FinalScreenProps) {
	return (
		<FlexContainer>
			<IoMdRefresh size={100} />
			<Question text={"Press the button the practice again"} />
			<Button title="Restart practice" onClick={restartGame} color="green" />
		</FlexContainer>
	);
}
