import React, { Component } from "react";
import style from "./modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../backdrop/backdrop";

class Modal extends Component {
	shouldComponentUpdate(nextProp) {
		return (
			nextProp.show !== this.props.show ||
			this.props.children !== nextProp.children
		);
	}
	render() {
		const { show, children, backdropHandler } = this.props;
		return (
			<Aux>
				<Backdrop show={show} clickHandler={backdropHandler} />
				<div
					style={{
						transform: show ? "translateY(0)" : "translateY(-100vh)",
						opacity: show ? "1" : "0"
					}}
					className={style.Modal}
				>
					{children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
