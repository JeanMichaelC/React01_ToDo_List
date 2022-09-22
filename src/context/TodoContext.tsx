import React from "react";
import { useLocalStorage } from "../shared/services/useLocalStorage";

type TodoContext = {
	loading?: boolean,
	myError?: boolean,
	totalTodos?: number,
	completedTodos?: number,
	searchValue?: string,
	setSearchValue?: React.Dispatch<React.SetStateAction<string>>,
	searchedTodos?: Todo[],
	completeTodo?: (todoText: string) => void,
	deleteTodo?: (todoText: string) => void,
	openModal?: boolean,
	setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>,
	addTodo?: (todoText: string) => void
}
const defaultContext: TodoContext = {};

type TodoProviderProps = {
	children: React.ReactNode
}
type Todo = {
	text: string,
	completed: boolean
}

const TodoContext = React.createContext(defaultContext);

function TodoProvider({children}: TodoProviderProps) {
    const { item: todos, saveItem: saveTodos, loading, myError} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
		const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo: Todo) => todo.completed === true).length;
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    if (searchValue.length <= 0) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter((todo: Todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
		
    
    const addTodo = (todoText: string) => {
      const newTodos = [...todos];
      newTodos.push({text: todoText, completed: false});
  
      saveTodos(newTodos);
    }
  
    const completeTodo = (todoText: string) => {
      const todoIndex = todos.findIndex(todo => todo.text === todoText);
  
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
  
      saveTodos(newTodos);
    }
  
    const deleteTodo = (todoText: string) => {
      const todoIndex = todos.findIndex(todo => todo.text === todoText);
  
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
  
      saveTodos(newTodos);
    }
  
    return (
        <TodoContext.Provider value={{
            loading,
            myError,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
						openModal,
						setOpenModal,
						addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
