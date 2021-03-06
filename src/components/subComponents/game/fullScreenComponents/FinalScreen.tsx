// Styles
import { Card, CardHeader, CardBody } from "../../../generalComponents/styles";
import { FlexContainer, CardContainer, HeaderIcon, PointsContainer, Description } from "../styles";

// Icons
import { GiSwordman, GiSwordwoman } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";

// Interfaces
import { User, Points } from "../../../../utils/interfaces";

// Utils
import max from "lodash/max";
import get from "lodash/get";

// Components
import Button from "src/components/generalComponents/Button";
import Question from "../../practiceWords/Question";

interface FinalScreenProps {
	owners: User[];
	points: Points;
	restartGame: () => void;
}

export default function FinalScreen({ owners, points, restartGame }: FinalScreenProps) {
	const maxPoint: number = max(Object.values(points));
	const winners: User[] = owners.filter((o: User) => get(points, o.id) === maxPoint);

	return (
		<FlexContainer>
			<IoBarChartSharp size={100} />

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

			<Question text={`Congratulations ${winners.map((winner: User) => winner.name).join(" and ")}!`} />
			<Description>{winners.length === 1 ? "You won." : "You had the same number of points."}</Description>

			<Button title="Play again" onClick={restartGame} color="green" />
		</FlexContainer>
	);
}
