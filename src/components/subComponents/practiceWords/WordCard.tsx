/* Utils */
import { colors } from "src/utils/colors";
import { ColorCodeType } from "src/utils/interfaces";

/* Styles */
import styled, { keyframes } from "styled-components";

const swing = keyframes`
{
    15%
    {
        -webkit-transform: translateX(10px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-10px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(6px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-6px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(4px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}`;

const Background = styled.div<{ selected: boolean; activeBackgroundColor: ColorCodeType }>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-height: 25%;
	min-width: 40%;
	padding: 32px;
	margin: 12px;
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 24px;
	background: ${colors.blockBackground};
	transition: all 0.8s ease;

	:hover {
		color: white;
		background: ${({ activeBackgroundColor }) => activeBackgroundColor};

		font-size: 3rem;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

		-webkit-animation: swing 1s ease;
		animation: ${swing} 1s ease;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
`;

interface WordCardProps {
	selected: boolean;
	text: string;
	setAnswerOfUser: React.Dispatch<React.SetStateAction<string>>;
	answerOfActualQuiz: string;
	cardNumber: number;
}

export default function WordCard({ text, selected, setAnswerOfUser, answerOfActualQuiz, cardNumber }: WordCardProps) {
	const activeBackgroundColor: ColorCodeType = (() => {
		switch (cardNumber) {
			case 0:
				return colors.activeCardColor1;
			case 1:
				return colors.activeCardColor2;
			case 2:
				return colors.activeCardColor3;
			case 3:
				return colors.activeCardColor4;
			default:
				return colors.activeCardColor1;
		}
	})();

	return (
		<Background
			selected={selected}
			activeBackgroundColor={activeBackgroundColor}
			onClick={() => {
				setAnswerOfUser(answerOfActualQuiz);
			}}>
			{text}
		</Background>
	);
}
