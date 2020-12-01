import React from "react";
import "./ChooseSet.css";

const BACKGROUNDS = [
	{ id: 0, name: "None" },
	{ id: 1, name: "Random" },
	{ id: 2, name: "Colors" },
];

interface ChooseSetProps {
	backgroundNum: number;
	handleBackgroundChange: React.Dispatch<React.SetStateAction<number>>;
}

const ChooseBackground = ({ backgroundNum, handleBackgroundChange }: ChooseSetProps) => {
	return (
		<>
			<p className="container__title">Choose a Background: </p>
			<div className="set__cards">
				{BACKGROUNDS.map(({ id, name }) => {
					return (
						<div
							key={id}
							className="set__card"
							style={{
								backgroundColor: id === backgroundNum ? "black" : "white",
								color: id === backgroundNum ? "white" : "black",
							}}
							onClick={() => handleBackgroundChange(id)}
						>
							<p>{name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ChooseBackground;
