import React from 'react';
// import './TodoList.css'
type TodoListProps = {
	children: React.ReactNode
}

function TodoList({ children }: TodoListProps) {
    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    );
}

export { TodoList };
