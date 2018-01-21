import React from "react";
import style from "./buildControls.css";
import BuildControl from "./buildControl/buildControl";

let controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Meat", type: "meat" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" }
];

const buildControls = props => {
	return (
		<div className={style.BuildControls}>
			{controls.map(ctrl => {
				return (
					<BuildControl
						key={ctrl.label}
						label={ctrl.label}
						addIngredHandler={() => props.addIngredHandler(ctrl.type)}
						removeIngredHandler={() => props.removeIngredHandler(ctrl.type)}
						disableButton={props.disableButton[ctrl.type]}
					/>
				);
			})}
			<button
				onClick={props.orderHandler}
				className={style.OrderButton}
				disabled={props.buyable <= 0}
			>
				Order Now!
			</button>
		</div>
	);
};

export default buildControls;
