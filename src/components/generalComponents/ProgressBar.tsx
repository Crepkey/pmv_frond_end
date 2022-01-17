// Styles
import { MainContainer, MainBar, ProgressColor, ProgressTitle } from "./styles";

interface ProgressBarProps {
	status: number; // This number can be between 0 and 100
}
export default function ProgressBar({ status }: ProgressBarProps) {
	return (
		<MainContainer>
			<MainBar>
				<ProgressColor status={status} />
			</MainBar>
			<ProgressTitle>{status}%</ProgressTitle>
		</MainContainer>
	);
}
