import React from "react";
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem >Home</NavigationItem>
		<NavigationItem active>Burger Builder</NavigationItem>
		<NavigationItem >About</NavigationItem>
		<NavigationItem >Contact Us</NavigationItem>
		<NavigationItem >Checkout</NavigationItem>
	</ul>


);

export default navigationItems;