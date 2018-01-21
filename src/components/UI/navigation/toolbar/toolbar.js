import React from "react";
import styles from "./toolbar.css";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
import SideDrawToggle from "../../sideDraw/sideDrawToggle/sideDrawToggle";

const toolbar = ({ openSideDrawHandler }) => {
	return (
		<header className={styles.Toolbar}>
			<SideDrawToggle clickHandler={openSideDrawHandler} />
			<div className={styles.Logo}>
				<Logo />
			</div>
			<nav className={styles.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
