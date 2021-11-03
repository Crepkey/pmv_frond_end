import { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "src/AppContext";
import { Toast } from "src/utils/interfaces";
import ToastCard from "./ToastCard";

export default function ToastHandler() {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const { toast } = useContext(AppContext);

	useEffect(() => {
		setToasts([...toasts, toast]);
	}, [toast]);

	if (toasts === []) {
		return null;
	}

	return (
		<Fragment>
			{toasts.map((toast: Toast, index: number) => (
				<ToastCard key={`${index}_toast`} title={toast.title} details={toast.title} type={toast.type} position={`${150 * index}px`} />
			))}
		</Fragment>
	);
}
