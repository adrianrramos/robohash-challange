import React from "react";
import "./ChooseSet.css";

const SETS = [
	{ id: 1, name: "Robo I" },
	{ id: 2, name: "Robo II" },
	{ id: 3, name: "Robo III" },
	{ id: 4, name: "Cats" },
	{ id: 5, name: "Humans" },
];

interface ChooseSetProps {
	setNum: number;
	handleSetChange: React.Dispatch<React.SetStateAction<number>>;
}

const ChooseSet = ({ setNum, handleSetChange }: ChooseSetProps) => {
	return (
		<>
			<p className="container__title">Choose a Set: </p>
			<div className="set__cards">
				{SETS.map(({ id, name }) => {
					return (
						<div
							key={id}
							className="set__card"
							style={{
								backgroundColor: id === setNum ? "black" : "white",
								color: id === setNum ? "white" : "black",
							}}
							onClick={() => handleSetChange(id)}
						>
							<p>{name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ChooseSet;
