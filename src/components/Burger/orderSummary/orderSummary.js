import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/button/button";
const orderSummary = ({ ingredients, cancelHandler, continueHandler }) => {
	let ListOfIngred = Object.keys(ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span>{igKey}:</span>
				{ingredients[igKey]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ListOfIngred}</ul>
			<p>Continue to Checkout?</p>
			<Button btnType="Success" btnHandler={continueHandler}>
				Continue
			</Button>
			<Button btnType="Danger" btnHandler={cancelHandler}>
				Cancel
			</Button>
		</Aux>
	);
};

export default orderSummary;
