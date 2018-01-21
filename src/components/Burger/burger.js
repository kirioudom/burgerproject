import React from "react";
import style from "./burger.css";
import BurgerIngredient from "./BurgerIngredient/burgerIngredient";

const burger = props => {
	let incredientOrder = Object.keys(props.ingredient)
		.map(igKey => {
			return [...Array(props.ingredient[igKey])].map((e, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, ele) => {
			return arr.concat(ele);
		}, []);

	if (incredientOrder.length === 0) {
		incredientOrder = <p>Please add some ingredients</p>;
	}

	return (
		<div className={style.Burger}>
			<BurgerIngredient type="bread-top" />
			{incredientOrder}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
