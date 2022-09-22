import React from "react";
import { TodoContext } from "../context/TodoContext";
// import './TodoForm.css';

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
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={todoValue}
        onChange={onChangeValue}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
	)
};

export { TodoForm };
