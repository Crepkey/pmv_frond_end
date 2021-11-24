// React
import { useEffect, useState } from "react";

// Icons
import { IoTimerOutline } from "react-icons/io5";

// Styles
import { Icon } from "./styles";

export default function Timer() {
	const [timeCounter, setTimeCounter] = useState<number>(0);
	const [timeIntervalId, setTimeIntervalId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (timeCounter === 0) {
			clearInterval(timeIntervalId as NodeJS.Timeout);
			setTimeIntervalId(null);
		}
	}, [timeCounter, timeIntervalId]);

	function countDown(timeOfCounting: number) {
		if (timeIntervalId !== null) {
			clearInterval(timeIntervalId as NodeJS.Timeout);
			setTimeIntervalId(null);
			return;
		}
		setTimeCounter(timeOfCounting);
		const newIntervalId = setInterval(() => {
			setTimeCounter((prevCount) => prevCount - 1);
		}, 1000);
		setTimeIntervalId(newIntervalId);
	}

	return (
		<Icon onClick={() => countDown(30)}>
			<IoTimerOutline size={32} />
			<div>{timeCounter}</div>
		</Icon>
	);
}
