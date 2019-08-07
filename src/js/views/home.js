import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Hero } from "../component/hero";
import { CardsGroup } from "../component/cardgroup";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<CardsGroup />
			</div>
		);
	}
}
