import React from "react";
import { Route, withRouter } from 'react-router-dom';
import styles from "./checkoutSummary.css";
import Burger from "../Burger/burger";
import Button from "../UI/button/button";


const checkoutSummary = props => {
	return (
		<div className={styles.Summary}>
			<Burger ingredient={props.ingredients} />
			<Button btnHandler={props.continueHandler} btnType="Success"> Continue</Button>
			<Button btnHandler={props.cancelHandler} btnType="Danger">Cancel</Button>

		</div>
	);
};

export default withRouter(checkoutSummary);
