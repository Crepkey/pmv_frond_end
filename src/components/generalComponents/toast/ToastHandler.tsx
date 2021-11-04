import { useContext, useEffect, useState } from "react";
import { AppContext } from "src/AppContext";
import { Toast } from "src/utils/interfaces";
import styled from "styled-components";
import ToastCard from "./ToastCard";

const MainContainer = styled.div`
	position: absolute;
	right: 8px;
	bottom: 8px;
	z-index: 1000;
`;

export default function ToastHandler() {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const { toast } = useContext(AppContext);

	useEffect(() => {
		if (toast.type === "init") return;
		setToasts([...toasts, toast]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toast]);

	if (toasts === []) {
		return null;
	}

	return (
		<MainContainer>
			{toasts.map((toast: Toast, index: number) => (
				<ToastCard key={`${index}_toast`} title={toast.title} details={toast.title} type={toast.type} />
			))}
		</MainContainer>
	);
}
