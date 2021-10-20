// Styles
import { Card, CardHeader, CardBody, GreenButton } from "../../generalComponents/styles";
import { MainContainer, ScreenTitle, CardContainer, HeaderIcon, PointsContainer, Congrats, ResultDescription } from "./styles";

// Icons
import { GiSwordman, GiSwordwoman } from "react-icons/gi";

// Interfaces
import { User, Points } from "../../../utils/interfaces";

// Utils
import max from "lodash/max";
import get from "lodash/get";

interface FinalScreenProps {
	owners: User[];
	points: Points;
	restartGame: () => void;
}

export default function FinalScreen({ owners, points, restartGame }: FinalScreenProps) {
	const maxPoint: number = max(Object.values(points));
	const winners: User[] = owners.filter((o: User) => get(points, o.id) === maxPoint);

	return (
		<MainContainer>
			<ScreenTitle>Final points</ScreenTitle>

			<CardContainer>
				{owners.map((owner: User, i: number) => {
					return (
						<Card key={i}>
							<CardHeader>
								<HeaderIcon>{owner.gender === "male" ? <GiSwordman size={28} /> : <GiSwordwoman size={28} />}</HeaderIcon>
								{owner.name}
							</CardHeader>
							<CardBody>
								<PointsContainer>{get(points, owner.id, "No points")}</PointsContainer>
							</CardBody>
						</Card>
					);
				})}
			</CardContainer>

			<Congrats>Congratulations {winners.map((winner: User) => winner.name).join(" and ")}!</Congrats>
			<ResultDescription>{winners.length === 1 ? "You won." : "You had the same number of points."}</ResultDescription>

			<GreenButton onClick={restartGame}>Play again</GreenButton>
		</MainContainer>
	);
}
