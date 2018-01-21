import React, { Component } from "react";
import Aux from "../hoc/Aux";
import style from "./layout.css";
import Toolbar from "../components/UI/navigation/toolbar/toolbar";
import SideDraw from "../components/UI/sideDraw/sideDraw";

class Layout extends Component {
	state = {
		showSideDraw: false
	};
	openSideDrawHandler = () => {
		this.setState({ showSideDraw: true });
	};
	closeSideDrawHandler = () => {
		this.setState({ showSideDraw: false });
	};

	render() {
		return (
			<Aux>
				<Toolbar openSideDrawHandler={this.openSideDrawHandler} />
				<SideDraw
					showSideDraw={this.state.showSideDraw}
					closeSideDrawHandler={this.closeSideDrawHandler}
					openSideDrawHandler={this.openSideDrawHandler}
				/>
				<main className={style.layout}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
