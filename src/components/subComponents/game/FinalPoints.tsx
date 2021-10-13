// Styles
import { Card, CardHeader, CardBody } from "../../generalComponents/styles";
import { MainContainer, ScreenTitle, CardContainer, HeaderIcon, PointsContainer, Congrats } from "./styles";

// Icons
import { GiSwordman, GiSwordwoman } from "react-icons/gi";

// Interfaces
import { Owner, Points } from "../../../utils/interfaces";

// Utils
import max from "lodash/max";
import get from "lodash/get";

interface FinalPointsProps {
	owners: Owner[];
	points: Points;
}

export default function FinalPoints({ owners, points }: FinalPointsProps) {
	const maxPoint: number = max(Object.values(points));
	const winners: Owner[] = owners.filter((o: Owner) => get(points, o.id) === maxPoint);

	return (
		<MainContainer>
			<ScreenTitle>Final points</ScreenTitle>

			<CardContainer>
				{owners.map((owner: Owner, i: number) => {
					return (
						<Card key={i}>
							<CardHeader>
								<HeaderIcon>{owner.sex === "male" ? <GiSwordman size={28} /> : <GiSwordwoman size={28} />}</HeaderIcon>
								{owner.name}
							</CardHeader>
							<CardBody>
								<PointsContainer>{get(points, owner.id, "No points")}</PointsContainer>
							</CardBody>
						</Card>
					);
				})}
			</CardContainer>

			<Congrats>Congratulations {winners.map((winner: Owner) => winner.name).join(" and ")}!</Congrats>
			{winners.length === 1 ? "You won." : "You had the same number of points."}
		</MainContainer>
	);
}
