// Styles
import styled from "styled-components";
import { Card, CardHeader, CardBody } from "../../generalComponents/styles";

// Icons
import { GiSwordman, GiSwordwoman } from "react-icons/gi";

// Interfaces
import { Owner, Points } from "../../../utils/interfaces";

// Utils
import max from "lodash/max";
import get from "lodash/get";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px;
`;

const Title = styled.div`
	font-size: 2rem;
	margin: 24px 0 16px 0;
	font-weight: bold;
`;

const CardContainer = styled.div`
	display: flex;
`;

const PointsContainer = styled.div`
	display: flex;
	font-size: 3rem;
	justify-content: center;
	font-weight: bold;
`;

const HeaderIcon = styled.div`
	border: 2px gray solid;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	margin-right: 16px;
`;

const Congrats = styled.div`
	font-size: 1.25rem;
	font-weight: bolder;
	margin: 16px;
`;

interface FinalPointsProps {
	owners: Owner[];
	points: Points;
}

export default function FinalPoints({ owners, points }: FinalPointsProps) {
	const maxPoint: number = max(Object.values(points));
	const winners: Owner[] = owners.filter((o: Owner) => get(points, o.id) === maxPoint);

	return (
		<MainContainer>
			<Title>Final points</Title>

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
