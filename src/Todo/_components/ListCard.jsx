import React, { useState, useContext } from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';
import ListActions from './ListActions';
import { FormControl } from '../../CommonStyledComponents/FormControl';
import { AppContext } from '../MainPageController';
import { AddButton } from '../../CommonStyledComponents/Buttons';

const InputContainer = styled.div`
  display: flex;
  input{
    margin-right: 1.25rem;
  }
  margin-bottom: 30px;
`;

const ListCard = ({ list }) => {

    const [text, setText] = useState("");

    const { handleAddItem } = useContext(AppContext);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const AddItem = (event) => {
        event.preventDefault();
        let newItem = {
            id: Date.now(),
            text: text,
            done: false
        };

        handleAddItem(list.id, newItem);
        setText('');
    }

    return (
        <>
            {!list.isSaved && <form>
                <InputContainer>
                    <FormControl type="text" onChange={handleTextChange} value={text} />
                    <AddButton onClick={AddItem} disabled={!text}>{"Add #" + (list.items.length + 1)}</AddButton>
                </InputContainer>
            </form>}

            <TodoList list={list} />

            <ListActions listId={list.id} items={list.items} viewOnly={list.isSaved} length={list.items.length} />
        </>
    )
}

export default ListCard;