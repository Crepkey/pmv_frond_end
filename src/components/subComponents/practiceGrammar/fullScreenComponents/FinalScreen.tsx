// Styles
import { ButtonContainer } from "../../game/styles";

// Components
import Button from "src/components/generalComponents/Button";

interface FinalScreenProps {
	restartGame: () => void;
}

export default function FinalScreen({ restartGame }: FinalScreenProps) {
	return (
		<ButtonContainer>
			<Button title="Play again" onClick={restartGame} color="green" />
		</ButtonContainer>
	);
}
