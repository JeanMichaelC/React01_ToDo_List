import React from "react";
import styled from "styled-components";

const Header1 = styled.h1<{greenMode?: boolean}>`
	width: 100%;
	text-align: center;
	color: ${({greenMode}) => greenMode === true ? 'green' : 'darkgrey'};
	font-family: Arial, Helvetica, sans-serif;
	font-size: 26px;
`;

interface AppI {
	message: string,
	greenMode?: boolean
}

const App: React.FC<AppI> = ({ message, greenMode }) => {
	console.log(greenMode);
	return(
		<Header1 greenMode={greenMode}>Hello new React. Message: {message}</Header1>
	)
}

export { App }
