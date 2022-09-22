import React from 'react';
import styled from 'styled-components';



type TodoListProps = {
	children: React.ReactNode
}
function TodoList({ children }: TodoListProps) {
    return (
        <section>
            <StyledUl>
                {children}
            </StyledUl>
        </section>
    );
}
export { TodoList };



const StyledUl = styled.ul`
	margin: 0;
	padding: 0 0 56px 0;
	list-style: none;
`;
