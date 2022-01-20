// Icons
import { IoBookOutline } from "react-icons/io5";

// Styles
import { FlexContainer } from "../../game/styles";

// Utils
import snakeCase from "lodash/snakeCase";

// Components
import Question from "../../practiceWords/Question";
import Button from "src/components/generalComponents/Button";

// Interfaces
import { ColorType } from "src/utils/interfaces";

interface StartScreenProps {
	initialize: (practiceType: string) => void;
}

export default function StartScreen({ initialize }: StartScreenProps) {
	return (
		<FlexContainer>
			<IoBookOutline size={100} />
			<Question text={"What kind of grammatical structures do you want to practice?"} />
			<div>
				{[
					{ text: "My weakest", color: "red" },
					{ text: "Rarely asked", color: "blue" },
					{ text: "Random", color: "green" },
				].map((i) => (
					<Button key={i.text} onClick={() => initialize(snakeCase(i.text))} title={i.text} color={i.color as ColorType} />
				))}
			</div>
		</FlexContainer>
	);
}
