import React from "react";
import style from "./sideDrawToggle.css";

const sideDrawToggle = ({ clickHandler }) => {
	return (
		<div onClick={clickHandler} className={style.DrawerToggle}>
			<div />
			<div />
			<div />
		</div>
	);
};

export default sideDrawToggle;
