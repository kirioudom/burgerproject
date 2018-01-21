import React from "react";
import NavigationItem from "../navigationItem/navigationItem";
import styles from "./navigationItems.css";

const navigationItems = props => {
	return (
		<ul className={styles.NavigationItems}>
			<NavigationItem link="/" active>
				Burger Builder
			</NavigationItem>
			<NavigationItem link="/checkout">Checkout</NavigationItem>
		</ul>
	);
};

export default navigationItems;
