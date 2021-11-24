// Icons
import { IoBookOutline } from "react-icons/io5";

// Styles
import { FlexContainer, BoldLargeMessage } from "../../game/styles";
import { Answer } from "../styles";

interface StartScreenProps {
	initialize: (practiceType: string) => void;
}

export default function StartScreen({ initialize }: StartScreenProps) {
	return (
		<FlexContainer>
			<IoBookOutline size={44} />
			<BoldLargeMessage>What kind of grammatical structures do you want to practice?</BoldLargeMessage>
			<div>
				{["My weakest", "Rarely asked", "Random"].map((i: string) => (
					<Answer key={i} onClick={() => initialize(i)}>
						{i}
					</Answer>
				))}
			</div>
		</FlexContainer>
	);
}
