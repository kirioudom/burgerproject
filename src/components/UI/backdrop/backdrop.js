import React from "react";

import style from "./backdrop.css";

const backdrop = ({ show, clickHandler }) => {
	return show ? (
		<div className={style.Backdrop} onClick={clickHandler} />
	) : null;
};

export default backdrop;
