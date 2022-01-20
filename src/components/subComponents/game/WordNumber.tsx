// Styles
import { colors } from "src/utils/colors";
import styled, { keyframes } from "styled-components";

// Interfaces
import { ColorCodeType } from "src/utils/interfaces";

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

const Background = styled.div<{ activeBackgroundColor: ColorCodeType }>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	box-sizing: border-box;
	height: 90px;
	width: 90px;
	margin: 12px;
	border-radius: 150px;
	font-size: 2rem;
	font-weight: 600;
	background: ${colors.inactiveCardBackground};
	transition: all 0.8s ease;
	:hover {
		cursor: pointer;
		color: white;
		background: ${({ activeBackgroundColor }) => activeBackgroundColor};
		font-size: 3rem;

		-webkit-animation: swing 1s ease;
		animation: ${swing} 1s ease;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
`;

interface WordNumberProps {
	cardNumber: number;
	onSelect: () => void;
}
export default function WordNumber({ cardNumber, onSelect }: WordNumberProps) {
	const activeBackgroundColor: ColorCodeType = (() => {
		switch (cardNumber) {
			case 5:
			case 6:
				return colors.activeCardBackground3;
			case 7:
			case 8:
				return colors.activeCardBackground2;
			default:
				return colors.activeCardBackground1;
		}
	})();

	return (
		<Background activeBackgroundColor={activeBackgroundColor} onClick={onSelect}>
			{cardNumber}
		</Background>
	);
}
