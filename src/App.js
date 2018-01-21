import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Layout from "./layouts/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/checkout";
class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Layout>
						<Route path="/checkout" component={Checkout} />
						<Route path="/" exact component={BurgerBuilder} />
					</Layout>
				</Switch>
			</div>
		);
	}
}

export default App;
