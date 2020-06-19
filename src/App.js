import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Aboutus from "./Pages/about-us";
import Header from "./Components/Common/Header/Header";
function App() {
	return (
		<div className="App">
			<Header />
			<Aboutus />
		</div>
	);
}

export default App;
