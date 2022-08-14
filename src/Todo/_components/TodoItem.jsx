import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../MainPageController';

const StyledItem = styled.li`
  background: #F5F5F5;
  border-radius: 8px;
  list-style: none;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;
  &.highlight{
    background: #EFF1F8;
  }
`;

const TextInput = styled.input`
  margin-right: 10px;
  vertical-align: middle;
`;

const TodoItem = ({ listId, isSaved, item }) => {

    const { handleItemCompleted, handleDeleteItem } = useContext(AppContext);

    const [isHighlight, setHighlight] = useState(true);

    // Highlight newly added item for several seconds.
    useEffect(() => {
        if (!isSaved) {
            setTimeout(() => {
                setHighlight(false);
            }, 500);
        }
    }, []);

    return (
        <StyledItem className={(item.completed ? "done" : "undone") + ((isHighlight && !isSaved) ? " highlight" : "")}>
            <div>
                {!isSaved && <TextInput type="checkbox" className="cursor-pointer" onChange={() => handleItemCompleted(listId, item.id)} />}
                {item.text}
            </div>

            <i className="bi bi-trash3 cursor-pointer" onClick={() => handleDeleteItem(listId, item.id)}></i>
        </StyledItem>
    );
}

export default TodoItem;