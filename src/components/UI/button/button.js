import React from "react";
import style from "./button.css";

const button = ({ btnType, children, btnHandler }) => {
	return (
		<button
			onClick={btnHandler}
			className={[style.Button, style[btnType]].join(" ")}
		>
			{children}
		</button>
	);
};

export default button;
