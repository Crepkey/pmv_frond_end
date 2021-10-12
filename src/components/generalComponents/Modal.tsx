import { Fragment } from "react";
import styled from "styled-components";

export const ModalBackgroundCover = styled.div`
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2px);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

/* TODO: Colors have to come from colors file */
export const ModalContainer = styled.div`
	background: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	min-width: 30rem;
	z-index: 2;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	svg {
		font-size: 1.5em;
	}
	&:hover {
		cursor: pointer;
	}
`;

interface ModalProps {
	isOpen: boolean;
	onCloseRequest(): void;
	children: React.ReactNode;
}

export default function Modal({ isOpen, onCloseRequest, children }: ModalProps) {
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
