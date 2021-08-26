import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer";
import Appreciation from "./components/Appreciation";

function App() {
  return (
    <>
	  <Router basename={process.env.PUBLIC_URL}>

		<Switch>

			<Route exact path="/" >

				<Pokedex/>
	  			
	  		</Route>

	  		<Route path="/pokemon/:id">

				<Pokemon/>	
	  		</Route>

	  		<Route path="/appreciation">

	  			<Appreciation/>


	  		</Route>

	  	</Switch>

	  	<Footer/>

	  </Router>


	  
    </>
  );
}

export default App;
