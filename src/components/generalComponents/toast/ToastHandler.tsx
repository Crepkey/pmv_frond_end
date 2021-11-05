import { useContext, useEffect } from "react";
import { AppContext } from "src/AppContext";
import { Toast } from "src/utils/interfaces";
import styled from "styled-components";
import ToastCard from "./ToastCard";

const MainContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	right: 8px;
	bottom: 8px;
	z-index: 1000;
`;

export default function ToastHandler() {
	const { toasts } = useContext(AppContext);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toasts]);

	if (toasts === []) {
		return null;
	}

	return (
		<MainContainer>
			{toasts.map((toast: Toast) => {
				return <ToastCard key={toast.id} id={toast.id} title={toast.title} details={toast.details} type={toast.type} />;
			})}
		</MainContainer>
	);
}
