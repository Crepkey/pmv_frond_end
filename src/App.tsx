import { Route, Redirect, Switch } from "react-router-dom";

// Components
import MenuBar from "./components/mainComponents/MenuBar";
import MyWords from "./components/mainComponents/MyWords";
import Home from "./components/mainComponents/Home";
import Game from "./components/mainComponents/Game";
import EditWord from "./components/subComponents/myWords/EditWord";
import Modal from "./components/generalComponents/Modal";

// Styles
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

function App() {
	return (
		<MainContainer>
			<MenuBar />

			<Switch>
				<Route path="/test" component={() => <Modal />} /> {/* Here you can pass any component that you want to test */}
				<Route path="/my-words" component={MyWords} />
				<Route path="/lets-play" component={Game} />
				<Route path="/" exact component={Home} />
				<Redirect to="/" />
			</Switch>
		</MainContainer>
	);
}

export default App;
