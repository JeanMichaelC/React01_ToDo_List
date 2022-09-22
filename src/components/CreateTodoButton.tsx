import React from 'react';
import { TodoContext } from "../context/TodoContext";
import styled from 'styled-components';



function CreateTodoButton() {
	const { openModal, setOpenModal } = React.useContext(TodoContext);

	const onClickButton = () => {
		openModal ? setOpenModal?.(false) : setOpenModal?.(true);
	};

	return (
		<StyledButton
			openModal={openModal}
			onClick={onClickButton}
		>+</StyledButton>
	);
}
export { CreateTodoButton };



const StyledButton = styled.button<{openModal?: boolean}>`
	background-color: ${({openModal}) => openModal ? '#f24d4d' : '#61DAFA'};
	box-shadow: 0px 5px 25px ${({openModal}) => openModal ? 'rgba(69, 97, 105, 0.5)' :'rgba(97, 218, 250, 0.5)'};
	border: none;
	border-radius: 50%;
	cursor: pointer;
	font-size: 50px;
	position: fixed;
	bottom: 24px;
	right: 24px;
	font-weight: bold;
	color: #FAFAFA;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	width: 64px;
	transform: ${({openModal}) => openModal ? 'rotate(45deg)' : 'rotate(0)'} rotate(0);
	transition: .3s ease;

	&:hover {
		transform: ${({openModal}) => openModal ? 'rotate(225deg)' : 'rotate(180deg)'} ;
	}
`;
