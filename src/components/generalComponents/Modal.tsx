import { Fragment } from "react";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ModalBackgroundCover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
	display: flex;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	z-index: 2;
	max-height: 90%;
	border-radius: 8px;
	background: ${colors.background};
`;

interface ModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
	if (!isOpen) {
		return null;
	}

	return (
		<Fragment>
			<ModalBackgroundCover />
			<ModalContainer>{children}</ModalContainer>
		</Fragment>
	);
}
