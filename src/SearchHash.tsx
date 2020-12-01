import React from "react";
import "./SearchHash.css";

interface SearchHashProps {
	term: string;
	handleTermChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHash = ({ term, handleTermChange }: SearchHashProps) => {
	return (
		<div className="search__container">
			<label htmlFor="baseText">Enter Text:</label>
			<input
				type="text"
				name="baseText"
				placeholder="Text generates images"
				value={term}
				onChange={e => handleTermChange(e.target.value)}
			/>
		</div>
	);
};

export default SearchHash;
