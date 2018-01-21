import React from "react";

import image from "../../../assets/images/burger-logo.png";
import style from "./logo.css";

const logo = props => {
	return (
		<div className={style.Logo}>
			<img src={image} alt="burgerLogo" />
		</div>
	);
};

export default logo;
