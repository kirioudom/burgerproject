import React from "react";
import Logo from "../logo/logo";
import NavigationItems from "../navigation/navigationItems/navigationItems";
import styles from "./sideDraw.css";
import Backdrop from "../backdrop/backdrop";
import Aux from "../../../hoc/Aux";

const sideDraw = ({
	closeSideDrawHandler,
	openSideDrawHandler,
	showSideDraw
}) => {
	let showSideDrawStyle = [styles.SideDraw, styles.Close];
	if (showSideDraw === true) {
		showSideDrawStyle = [styles.SideDraw, styles.Open];
	}
	return (
		<Aux>
			<Backdrop show={showSideDraw} clickHandler={closeSideDrawHandler} />
			<div className={showSideDrawStyle.join(" ")}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDraw;
