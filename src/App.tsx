import { Route, Redirect, Switch } from "react-router-dom";

/* Components */
import MenuBar from "./components/mainComponents/MenuBar";
import MyWords from "./components/mainComponents/MyWords";
import Home from "./components/mainComponents/Home";
import Game from "./components/mainComponents/Game";
import PracticeGrammar from "./components/mainComponents/PracticeGrammar";
import PracticeWords from "./components/mainComponents/PracticeWords";

/* Utils */
import ToastHandler from "./components/generalComponents/toast/ToastHandler";

/* Context */
import { AppProvider } from "./AppContext";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

function App() {
	return (
		<AppProvider>
			<MainContainer>
				<MenuBar />
				<Switch>
					{/* Here you can pass any component that you want to test */}
					<Route path={"/practice/words"} component={PracticeWords} />
					<Route path="/my-words" component={MyWords} />
					<Route path="/practice/grammatical-structures" component={PracticeGrammar} />
					<Route path="/lets-play" component={Game} />
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
				<ToastHandler />
			</MainContainer>
		</AppProvider>
	);
}

export default App;
