import React, { useEffect, useState } from "react";
import ChooseSet from "./ChooseSet";
import SearchHash from "./SearchHash";
import BarLoader from "react-spinners/BarLoader";
import "./App.css";
import ChooseBackground from "./ChooseBackground";

const OVERRIDE_LOADER_CSS = `
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
`;

const RoboHash = () => {
	const [currentImage, setCurrentImage] = useState<string>("");
	const [currentTerm, setCurrentTerm] = useState<string>("");
	const [currentSet, setCurrentSet] = useState<number>(1);
	const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);
	const [currentBackground, setCurrentBackground] = useState<number>(0);

	useEffect(() => {
		setIsImgLoaded(false);
		setCurrentImage(
			`https://robohash.org/${
				currentTerm || "qfq844uf384hf"
			}.png?set=set${currentSet}&bgset=bg${currentBackground}&ignoreext=false`
		);
		console.log(currentImage);
	}, [currentSet, currentTerm, currentImage, currentBackground]);

	return (
		<>
			<h1 id="app__title">THE AMAZING ROBO HASH</h1>
			<div className="content__container">
				<div className="image__container">
					<div className="image__box">
						{isImgLoaded ? (
							<img src={currentImage} alt="Robo Images" onLoad={() => setIsImgLoaded(true)} />
						) : (
							<BarLoader
								color={"black"}
								width="100"
								height={5}
								loading={!isImgLoaded}
								css={OVERRIDE_LOADER_CSS}
							/>
						)}
						<img
							src={currentImage}
							alt="Robo Images"
							onLoad={() => setIsImgLoaded(true)}
							width={0}
							height={0}
						/>
					</div>
				</div>
				<div className="actions__container">
					<SearchHash term={currentTerm} handleTermChange={setCurrentTerm} />
					<ChooseSet setNum={currentSet} handleSetChange={setCurrentSet} />
					<ChooseBackground backgroundNum={currentBackground} handleBackgroundChange={setCurrentBackground} />
				</div>
			</div>
		</>
	);
};

export default RoboHash;
