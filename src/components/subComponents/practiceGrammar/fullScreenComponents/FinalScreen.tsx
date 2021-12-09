// Styles
import { GreenButton } from "src/components/generalComponents/styles";
import { ButtonContainer } from "../../game/styles";

interface FinalScreenProps {
	restartGame: () => void;
}

export default function FinalScreen({ restartGame }: FinalScreenProps) {
	return (
		<ButtonContainer>
			<GreenButton onClick={restartGame}>Play again</GreenButton>
		</ButtonContainer>
	);
}
