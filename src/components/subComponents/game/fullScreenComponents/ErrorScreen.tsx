// Icons
import { IoSadOutline } from "react-icons/io5";

// Styles
import { FlexContainer, BoldLargeMessage } from "../styles";

interface ErrorScreenProps {
	error: string;
}

export default function ErrorScreen({ error }: ErrorScreenProps) {
	return (
		<FlexContainer>
			<IoSadOutline size={44} />
			<BoldLargeMessage>Sorry, you can't play!</BoldLargeMessage>
			{error}
		</FlexContainer>
	);
}
