import { useContext, useEffect } from "react";
import { AppContext } from "src/AppContext";
import ToastCard from "./ToastCard";

export default function ToastHandler() {
	const { toast, setToast } = useContext(AppContext);

	useEffect(() => {}, [toast]);

	if (toast.type === "init") {
		return null;
	}
	return <ToastCard title={toast.title} details={toast.title} type={toast.type} />;
}
