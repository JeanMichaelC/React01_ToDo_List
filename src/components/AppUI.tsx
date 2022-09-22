import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
	const { myError, loading, searchedTodos, completeTodo, deleteTodo, openModal } = React.useContext(TodoContext);

	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{myError && <p>Desespérate, hubo un error...</p>}
				{loading && <p>Estamos cargando, no te desesperes...</p>}
				{(!loading && searchedTodos?.length == 0) && <p>Crea tu primer TODO!</p>}

				{searchedTodos?.map(todo => <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo?.(todo.text)} onDelete={() => deleteTodo?.(todo.text)} />)}
			</TodoList>

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton/>
		</>
	);
}

export { AppUI };
