import React from 'react';
import styled from 'styled-components';



type TodoItemProps = {
	completed: boolean,
	text: string,
	onDelete: () => void,
	onComplete: () => void
}
function TodoItem({ completed, text, onDelete, onComplete }: TodoItemProps) {
    return (
        <StyledLi>
            <Icon completed={completed} type={'check'} onClick={onComplete}>
                √
            </Icon>
            <StyledP completed={completed}>
                {text}
            </StyledP>
            <Icon type={'delete'} onClick={onDelete}>
                X
            </Icon>
        </StyledLi>
    );
}
export { TodoItem };



const StyledLi = styled.li`
	background-color: #FAFAFA;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
	box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
`;

const StyledP = styled.p<{completed?: boolean}>`
	margin: 24px 0 24px 24px;
	width: calc(100% - 120px);
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
`;

const Icon = styled.span<{type: string, completed?: boolean}>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 48px;
	font-size: 24px;
	font-weight: bold;
	color: ${({completed, type}) => (completed && (type === 'check')) ? '#4caf50' : '#000'};

	${({type}) => type === 'check' && `
		position: absolute;
    left: 12px;
	`}
	${({type}) => type === 'delete' && `
    position: absolute;
    top: -24px;
    right: 0;
		&:hover{
			color: red;
		}
	`}
`;
