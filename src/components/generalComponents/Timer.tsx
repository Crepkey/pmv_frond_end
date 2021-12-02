// React
import { useEffect, useState } from "react";

// Icons
import { IoTimerOutline } from "react-icons/io5";

// Styles
import { Icon, TimeLeft } from "./styles";

interface TimerProps {
	timeOfCounting: number;
	iconButtonNeeded?: boolean;
}

export default function Timer({ timeOfCounting, iconButtonNeeded }: TimerProps) {
	const [timeCounter, setTimeCounter] = useState<number>(-1);
	const [timeIntervalId, setTimeIntervalId] = useState<NodeJS.Timeout | null>(null);

	// Cleanup
	useEffect(() => {
		return () => {
			stopTimer();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setTimeCounter(timeOfCounting);
		if (iconButtonNeeded !== true) {
			countDown(timeOfCounting);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeOfCounting, iconButtonNeeded]);

	useEffect(() => {
		if (timeCounter === 0) {
			stopTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeCounter]);

	function startTimer(timeOfCounting: number) {
		setTimeCounter(timeOfCounting);
		const newIntervalId = setInterval(() => {
			setTimeCounter((prevCount) => prevCount - 1);
		}, 1000);
		setTimeIntervalId(newIntervalId);
	}

	function stopTimer() {
		clearInterval(timeIntervalId as NodeJS.Timeout);
		setTimeIntervalId(null);
	}

	function countDown(timeOfCounting: number) {
		if (timeIntervalId !== null) {
			stopTimer();
			return;
		}
		startTimer(timeOfCounting);
	}

	if (iconButtonNeeded) {
		return (
			<Icon onClick={() => countDown(timeOfCounting)}>
				<IoTimerOutline size={32} />
				<TimeLeft>{timeCounter}</TimeLeft>
			</Icon>
		);
	}

	return <TimeLeft>{timeCounter}</TimeLeft>;
}
