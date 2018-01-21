import React, { Component } from "react";
import { Route } from "react-router-dom"
import CheckoutSummary from "../../components/checkoutSummary/checkoutSummary";
import ContactOrder from "../contactOrder/contactOrder";

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 0,
			meat: 0,
			cheese: 4,
			bacon: 4
		},
		totalPrice: 0
	};

	componentWillMount() {
		const queryParams = this.props.location.search;
		const queryArr = new URLSearchParams(queryParams);
		let ingredients = {};
		let totalPrice = 0;
		for (let key of queryArr) {
			if (key[0] === "totalPrice") {
				totalPrice = parseFloat(key[1], 10);
			} else {
				ingredients[key[0]] = parseInt(key[1], 10);
			}
		}
		this.setState({ ingredients, totalPrice });
	}

	continueHandler = () => {
		this.props.history.replace(this.props.match.url + "/contactorder");
	}

	cancelHandler = () => {
		this.props.history.goBack();
	}
	render() {
		return (
			<div>
				<CheckoutSummary
					continueHandler={this.continueHandler}
					cancelHandler={this.cancelHandler}
					ingredients={this.state.ingredients} />
				<Route path={this.props.match.url + "/contactorder"}
					render={(props) => (<ContactOrder
						ingredients={this.state.ingredients}
						totalPrice={this.state.totalPrice} />)} />
			</div>
		);
	}
}

export default Checkout;
