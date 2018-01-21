import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigationItem.css";

const navigationItem = ({ children, link, active }) => {
	console.log(link);
	return (
		<li className={styles.NavigationItem}>
			<Link to={link}>{children}</Link>
		</li>
	);
};

export default navigationItem;
