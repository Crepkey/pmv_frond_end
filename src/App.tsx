import { Route, Redirect, Switch } from "react-router-dom";

// Components
import MenuBar from "./components/mainComponents/MenuBar";
import MyWords from "./components/mainComponents/MyWords";
import Home from "./components/mainComponents/Home";
import Game from "./components/mainComponents/Game";
import { AppProvider } from "./AppContext";

// Styles
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

function App() {
	async function apiTest() {
		const response = await fetch("/13", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ test: "React POST Request Example" }),
		});
		const data = await response.json();
		console.log(data);
	}

	apiTest();

	return (
		<AppProvider>
			<MainContainer>
				<MenuBar />
				<Switch>
					{/* Here you can pass any component that you want to test */}
					<Route path="/my-words" component={MyWords} />
					<Route path="/lets-play" component={Game} />
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</MainContainer>
		</AppProvider>
	);
}

export default App;
