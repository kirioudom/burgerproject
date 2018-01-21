import React from "react";
import style from "./buildControl.css";

const buildControl = props => {
	return (
		<div className={style.BuildControl}>
			<div className={style.Label}>{props.label}</div>
			<button className={style.More} onClick={props.addIngredHandler}>
				More
			</button>
			<button
				className={style.Less}
				onClick={props.removeIngredHandler}
				disabled={props.disableButton}
			>
				Less
			</button>
		</div>
	);
};

export default buildControl;
