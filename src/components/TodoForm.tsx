import React from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";



function TodoForm() {
	const { addTodo, setOpenModal } = React.useContext(TodoContext);
	const [todoValue, setTodoValue] = React.useState('');

	const onChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTodoValue(event.target.value);
	};

	const onCancel = () => {
		setTodoValue('');
		setOpenModal?.(false);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTodo?.(todoValue);
		setTodoValue('');
		setOpenModal?.(false);

	};

	return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>Escribe tu nuevo TODO</StyledLabel>
      <StyledTextarea
        value={todoValue}
        onChange={onChangeValue}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <ButtonContainer>
        <TodoButton
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </TodoButton>
        <TodoButton
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </TodoButton>
      </ButtonContainer>
    </StyledForm>
	)
};
export { TodoForm };



const StyledForm = styled.form`
	width: 90%;
	max-width: 300px;
	background-color: #fff;
	padding: 33px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;


const StyledLabel = styled.label`
	text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #1E1E1F;
  margin-bottom: 26px;
`;


const StyledTextarea = styled.textarea`
	background-color: #F9FBFC;
  border: 2px solid #202329;
  border-radius: 2px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  color: #1E1E1F;
  font-size: 20px;
  text-align: center;
  padding: 12px;
  height: 96px;
  width: calc(100% - 25px);

	&::placeholder {
		color: #A5A5A5;
		font-family: 'Montserrat';
		font-weight: 400;
	}

	&:focus {
		outline-color: #61DAFA;
	}
`;


const ButtonContainer = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;	
`;


const TodoButton = styled.button`
	cursor: pointer;
  display: inline-block;
  font-size: 20px;
  color: #202329;
  font-weight: 400;
  width: 120px;
  height: 48px;
  border-radius: 2px;
  border: none;
  font-family: 'Montserrat';

	&[type="submit"] {
		background: #61DAFA;
 		box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);		
	}
	&[type="button"] {
		background: transparent;	
	}
`;
