import React from "react";
import "./App.css";
import FruitList from "./components/fruits";

const App = () => {
	return (
		<div className="App">
			<header>
				<h1>Welcome to the Fruit App</h1>
				<main>
					<FruitList />
				</main>
			</header>
		</div>
	);
};

export default App;
