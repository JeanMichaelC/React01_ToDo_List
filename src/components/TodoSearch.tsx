import React from 'react';
import { TodoContext } from "../context/TodoContext";
import styled from 'styled-components';



function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchValue?.(event.target.value);
  }

  return (
    <>
      <StyledInput className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange}/>
    </>
  );
}
export { TodoSearch };



const StyledInput = styled.input`
	background: #F9FBFC;
	border-radius: 2px;
	border: 2px solid #202329;
	margin: 0 24px;
	height: 64px;
	width: calc(100% - 62px);
	font-size: 24px;
	text-align: center;
	font-family: 'Montserrat';
	font-weight: 400;
	color: #1E1E1F;
	box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);

	&::placeholder {
		color: #A5A5A5;
    font-family: 'Montserrat';
    font-weight: 400;
	}

	&:focus {
		outline-color: #61DAFA;
	}
`;
