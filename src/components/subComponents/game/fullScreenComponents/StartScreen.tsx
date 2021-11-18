// Utils
import range from "lodash/range";

// Icons
import { IoDiceOutline } from "react-icons/io5";

// Styles
import { FlexContainer, BoldLargeMessage, AnswerContainer, Answer } from "../styles";

interface StartScreenProps {
	initialize: (numberOfWords: number) => void;
}
export default function StartScreen({ initialize }: StartScreenProps) {
	return (
		<FlexContainer>
			<IoDiceOutline size={44} />
			<BoldLargeMessage>How may words do you want to play with?</BoldLargeMessage>
			<AnswerContainer>
				{range(5, 11).map((i: number) => (
					<Answer key={i} onClick={() => initialize(i)}>
						{i}
					</Answer>
				))}
			</AnswerContainer>
		</FlexContainer>
	);
}
