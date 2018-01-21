import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/Burger/orderSummary/orderSummary";
import axiosInstance from "../../axios_order";
import Spinner from "../../components/UI/spinner/spinner";
import style from "./burgerBuilder.css";
import errorHandler from "../../hoc/errorHandler";

const TABLE_PRICE = {
	salad: 0.45,
	bacon: 1.0,
	meat: 1.2,
	cheese: 0.2
};

class BurgerBuilder extends Component {
	state = {
		ingredient: null,
		totalPrice: 0,
		buying: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axiosInstance
			.get("https://my-burger-project-255d3.firebaseio.com/ingredients.json")
			.then(response => {
				this.setState({ ingredient: response.data });
				let { ingredient } = this.state;
				let { totalPrice } = this.state;
				Object.keys(ingredient).forEach(ingre => {
					let subTotal = ingredient[ingre] * TABLE_PRICE[ingre];
					totalPrice += subTotal;
				});
				this.setState({ totalPrice: totalPrice });
			})
			.catch(error => this.setState({ error: true }));
	}

	addIngredient = type => {
		let newIngredient = { ...this.state.ingredient };
		newIngredient[type] += 1;
		let { totalPrice } = this.state;
		totalPrice += TABLE_PRICE[type];
		this.setState({ ingredient: newIngredient, totalPrice });
	};

	removeIngredient = type => {
		if (this.state.ingredient[type] === 0) {
			return;
		}
		let newIngredient = { ...this.state.ingredient };
		newIngredient[type] -= 1;
		let { totalPrice } = this.state;
		totalPrice =
			Number(totalPrice).toFixed(2) - Number(TABLE_PRICE[type]).toFixed(2);
		this.setState({
			ingredient: newIngredient,
			totalPrice
		});
	};

	continueHandler = () => {
		let queryArr = [];
		for (let i in this.state.ingredient) {
			queryArr.push(
				encodeURIComponent(i) +
				"=" +
				encodeURIComponent(this.state.ingredient[i])
			);
		}
		let totalPrice = this.state.totalPrice;
		queryArr.push(encodeURIComponent("totalPrice") + "=" + totalPrice.toFixed(2).toString());
		console.log(queryArr);
		let queryParams = queryArr.join("&");
		console.log(queryArr);
		this.props.history.push({
			pathname: "/checkout",
			search: "?" + queryParams
		});
	};

	orderHandler = () => {
		this.setState({ buying: true });
	};

	backdropHandler = () => {
		this.setState({ buying: false });
	};

	render() {
		let orderSummary = null,
			burger = <Spinner />,
			disableButton;

		if (this.state.ingredient) {
			disableButton = { ...this.state.ingredient };
			Object.keys(disableButton).forEach(key => {
				disableButton[key] = disableButton[key] <= 0;
			});
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredient}
					cancelHandler={this.backdropHandler}
					continueHandler={this.continueHandler}
				/>
			);
			burger = (
				<Aux>
					<Burger ingredient={this.state.ingredient} />
					<h2 className={style.price}>
						Price:${this.state.totalPrice.toFixed(2)}
					</h2>
					<BuildControls
						addIngredHandler={this.addIngredient}
						removeIngredHandler={this.removeIngredient}
						disableButton={disableButton}
						buyable={this.state.totalPrice}
						orderHandler={this.orderHandler}
					/>
				</Aux>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}
		return (
			<Aux>
				<Modal show={this.state.buying} backdropHandler={this.backdropHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default errorHandler(BurgerBuilder, axiosInstance);
