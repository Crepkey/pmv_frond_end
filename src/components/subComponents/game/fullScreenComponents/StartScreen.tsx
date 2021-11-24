// Utils
import range from "lodash/range";

// Icons
import { IoDiceOutline, IoAccessibility } from "react-icons/io5";

// Styles
import { FlexContainer, BoldLargeMessage, AnswerContainer, Answer, LargerMessage } from "../styles";

// Components
import Timer from "src/components/generalComponents/Timer";

interface StartScreenProps {
	initialize: (numberOfWords: number) => void;
	firstPlayer: string;
	countDownOn: Boolean;
}
export default function StartScreen({ initialize, firstPlayer, countDownOn }: StartScreenProps) {
	if (countDownOn) {
		return (
			<FlexContainer>
				<IoAccessibility size={44} />
				<BoldLargeMessage>The game starts with {firstPlayer}'s word</BoldLargeMessage>
				<LargerMessage>
					in <Timer timeOfCounting={5} /> seconds
				</LargerMessage>
			</FlexContainer>
		);
	}

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
