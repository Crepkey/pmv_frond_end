import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`
     15%
    {
        -webkit-transform: translateX(15px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-15px);
       transform: translateX(-5px); 
    } 
    50%
    {
        -webkit-transform: translateX(11px);
        transform: translateX(3px);  
    }
    65%
    {
        -webkit-transform: translateX(-11px);
        transform: translateX(-3px);  
    }
    80%
    {
        -webkit-transform: translateX(10px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);        
    }
`;

const QuestionContainer = styled.div`
	padding: 24px;
	font-weight: 700;
	font-size: 2rem;

	animation-name: ${FadeInAnimation};
	animation-duration: 1s;
	animation-fill-mode: none;
`;

interface QuestionProps {
	text: string;
}

export default function Question({ text }: QuestionProps) {
	return <QuestionContainer key={text}>{text}</QuestionContainer>;
}
