import React, { Component } from "react";
import styles from "./burgerIngredient.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;
		switch (this.props.type) {
			case "bread-bottom":
				ingredient = <div className={styles.BreadBottom} />;
				break;
			case "bread-top":
				ingredient = (
					<div className={styles.BreadTop}>
						<div className={styles.Seed1} />
						<div className={styles.Seed2} />
					</div>
				);
				break;
			case "meat":
				ingredient = <div className={styles.Meat} />;
				break;
			case "salad":
				ingredient = <div className={styles.Salad} />;
				break;
			case "cheese":
				ingredient = <div className={styles.Cheese} />;
				break;
			case "bacon":
				ingredient = <div className={styles.Bacon} />;
				break;
			default:
				ingredient = null;
				break;
		}
		return ingredient;
	}
}
BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
