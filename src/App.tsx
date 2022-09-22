import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { AppUI } from "./components/AppUI";

const App: React.FC = () => {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	)
}

export { App }
