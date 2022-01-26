// Utils
import range from "lodash/range";

// Icons
import { IoDiceOutline, IoAccessibility } from "react-icons/io5";

// Styles
import { FlexContainer, AnswerContainer, LargerMessage } from "../styles";

// Components
import Timer from "src/components/generalComponents/Timer";
import Question from "../../practiceWords/Question";
import WordNumber from "../WordNumber";

interface StartScreenProps {
	initialize: (numberOfWords: number) => void;
	firstPlayer: string;
	countDownOn: Boolean;
}
export default function StartScreen({ initialize, firstPlayer, countDownOn }: StartScreenProps) {
	if (countDownOn) {
		return (
			<FlexContainer>
				<IoAccessibility size={100} />
				<Question text={`The game starts with ${firstPlayer}'s word`} />
				<LargerMessage>
					in <Timer timeOfCounting={5} /> seconds
				</LargerMessage>
			</FlexContainer>
		);
	}

	return (
		<FlexContainer>
			<IoDiceOutline size={100} />
			<Question text={"How many words do you want to play with?"} />
			<AnswerContainer>
				{range(5, 11).map((i: number) => (
					<WordNumber key={i} cardNumber={i} onSelect={() => initialize(i)} />
				))}

				<WordNumber cardNumber={100} onSelect={() => initialize(100)} />
			</AnswerContainer>
		</FlexContainer>
	);
}
