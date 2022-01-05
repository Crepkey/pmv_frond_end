/* Utils */
import { colors } from "src/utils/colors";

/* Styles */
import styled from "styled-components";

const Background = styled.div<{ selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-height: 25%;
	min-width: 40%;
	padding: 32px;
	margin: 12px;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 24px;
	border: ${({ selected }) => (selected ? `3px ${colors.activeBorder} solid` : "3px rgba(0, 0, 0, 0) solid")};
	background: ${colors.blockBackground};

	:hover {
		border: 3px ${colors.activeBorder} solid;
	}
`;

interface WordCardProps {
	selected: boolean;
	text: string;
	setAnswerOfUser: React.Dispatch<React.SetStateAction<string>>;
	answerOfActualQuiz: string;
}

export default function WordCard({ text, selected, setAnswerOfUser, answerOfActualQuiz }: WordCardProps) {
	return (
		<Background
			selected={selected}
			onClick={() => {
				setAnswerOfUser(answerOfActualQuiz);
			}}>
			{text}
		</Background>
	);
}
