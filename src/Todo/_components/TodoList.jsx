import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components'
import { AppContext } from '../MainPageController';
import { FlexEndWrapper } from '../../CommonStyledComponents/FlexWrappers';
import { DeleteListButton } from '../../CommonStyledComponents/Buttons';

const SimpleList = styled.ul`
  padding-left: 0;
  li{
    list-style:none;
  }
  li:not(:last-child){
    margin-bottom: 1.7vh;
  }
`;
const ViewSavedList = styled(SimpleList)`
    padding-top: 1rem;
    background-color: #f1f1f1;
    border-radius: 8px;
`;

const TodoList = ({ list }) => {

    const { handleDeleteList } = useContext(AppContext);

    const renderItems = list.items.map(item => (
        <TodoItem listId={list.id} key={item.id} item={item} isSaved={list.isSaved} />
    ));

    return (
        <>
            {list.isSaved ?
                (list.items.length ?
                    <ViewSavedList>
                        {renderItems}
                        {list.items.length && <FlexEndWrapper>
                            <DeleteListButton onClick={() => handleDeleteList(list.id)}>Delete List</DeleteListButton>
                        </FlexEndWrapper>}
                    </ViewSavedList>
                    :
                    <></>
                )
                :
                <SimpleList>
                    {renderItems}
                </SimpleList>
            }
        </>
    )
}

export default TodoList;

