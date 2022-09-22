import React from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";



function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);

	return (
		<StyledH2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</StyledH2>
	)
}
export { TodoCounter };



const StyledH2 = styled.h2`
	font-size: 24px;
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
	margin: 0;
	padding: 48px;
`;
