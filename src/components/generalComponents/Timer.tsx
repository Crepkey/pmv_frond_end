// React
import { useEffect, useState } from "react";

// Icons
import { IoTimerOutline } from "react-icons/io5";

// Styles
import { Icon } from "./styles";

interface TimerProps {
	timeOfCounting: number;
	iconButtonNeeded?: boolean;
}

export default function Timer({ timeOfCounting, iconButtonNeeded }: TimerProps) {
	const [timeCounter, setTimeCounter] = useState<number>(-1);
	const [timeIntervalId, setTimeIntervalId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setTimeCounter(timeOfCounting);
		if (iconButtonNeeded !== true) {
			countDown(timeOfCounting);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeOfCounting, iconButtonNeeded]);

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

	if (iconButtonNeeded) {
		return (
			<Icon onClick={() => countDown(timeOfCounting)}>
				<IoTimerOutline size={32} />
				<div>{timeCounter}</div>
			</Icon>
		);
	}

	return <div>{timeCounter}</div>;
}
