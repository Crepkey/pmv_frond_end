import { useContext } from "react";
import { Link } from "react-router-dom";

/* Icons */
import { BsPersonCircle } from "react-icons/bs";
import MainLogo from "../generalComponents/MainLogo";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { AppContext } from "../../AppContext";

const MainContainer = styled.div`
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	display: flex;
	justify-content: space-between;
`;

const LogoContainer = styled(Link)`
	text-decoration: none;
	color: ${colors.inactiveFont};
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.25rem;
	padding: 0 24px 0 24px;
`;

const Menu = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const MenuItem = styled(Link)`
	text-decoration: none;
	color: ${colors.inactiveFont};
	font-weight: 550;
	margin-right: 8px;
	padding: 8px;
	border-bottom: 3px rgba(0, 0, 0, 0) solid; // invisible border, but needed for the fix height
	:hover {
		color: ${colors.activeFont};
		border-bottom: 3px ${colors.activeBorder} solid;
	}
`;

const UserAvatarContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0 24px 0 24px;
`;

export default function MenuBar() {
	const { activeUser, setActiveUser } = useContext(AppContext);

	function toggleActiveUser() {
		const Petra = 1;
		const Attila = 2;
		if (activeUser === Petra) {
			setActiveUser(Attila);
			window.alert(`The active user has been set to Attila`);
			return;
		} else setActiveUser(Petra);
		window.alert(`The active user has been set to Petra`);
	}

	return (
		<MainContainer>
			<LogoContainer to="/">
				<MainLogo size={28} backgroundColor={colors.headerGradientDarker} />
				PIMP MY VOCAB
			</LogoContainer>
			<Menu>
				<MenuItem to="/my-words/active-words">My words</MenuItem>
				<MenuItem to="/practice/grammatical-structues">Practice grammatical structures</MenuItem>
				<MenuItem to="/lets-play">Let's play</MenuItem>
			</Menu>
			<UserAvatarContainer>
				<BsPersonCircle onClick={toggleActiveUser} size={28} />
			</UserAvatarContainer>
		</MainContainer>
	);
}
