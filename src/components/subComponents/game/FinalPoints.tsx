import { Fragment } from "react";

// Styles
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Icons
import { GiSwordman, GiSwordwoman } from "react-icons/gi";

// Interfaces
import { Owner, Points } from "../../../utils/interfaces";

// Utils
import max from "lodash/max";
import get from "lodash/get";

const Title = styled.div`
	font-size: 2rem;
	margin: 24px 0 16px 0;
	font-weight: bold;
`;

const FlexRow = styled.div`
	display: flex;
`;

const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	margin: 16px;
	width: 20%;
	min-width: 20rem;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const CardHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: 450;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	padding: 0 16px 0 16px;
	min-height: 3rem;
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

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 24px;
	font-size: 3rem;
	align-items: center;
	font-weight: bold;
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
	const winners = owners.filter((o: Owner) => get(points, o.id) === maxPoint);

	return (
		<Fragment>
			<Title>Final points</Title>
			<FlexRow>
				{owners.map((owner: Owner, i: number) => {
					return (
						<Card key={i}>
							<CardHeader>
								<HeaderIcon>{owner.sex === "male" ? <GiSwordman size={28} /> : <GiSwordwoman size={28} />}</HeaderIcon>
								{owner.name}
							</CardHeader>
							<CardBody>{get(points, owner.id, "No points")}</CardBody>
						</Card>
					);
				})}
			</FlexRow>
			<Congrats>Congratulations {winners.map((winner: Owner) => winner.name).join(" and ")}!</Congrats>
			{winners.length === 1 ? "You won." : "You had the same number of points."}
		</Fragment>
	);
}
