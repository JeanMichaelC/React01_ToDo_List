import React from 'react';
import { TodoContext } from "../context/TodoContext";
// import './CreateTodoButton.css';

function CreateTodoButton() {
	const {openModal, setOpenModal } = React.useContext(TodoContext);

	const onClickButton = () => {
		openModal ? setOpenModal?.(false): setOpenModal?.(true);
	};

	return (
		<button
			className={`CreateTodoButton ${openModal && 'CloseTodoButton'}`}
			onClick={onClickButton}
		>+</button>
	);
}

export { CreateTodoButton };
