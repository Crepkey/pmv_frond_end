import styled from "styled-components";

const QuestionContainer = styled.div`
	padding: 24px;
	font-weight: 700;
	font-size: 2rem;
`;

interface QuestionProps {
	text: string;
}

export default function Question({ text }: QuestionProps) {
	return <QuestionContainer>{text}</QuestionContainer>;
}
