import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../MainPageController';
import { ActionButtons } from '../../CommonStyledComponents/Buttons';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  > div:not(:last-child){
    margin-right: 1rem;
  }
  @media(max-width: 400px){
    flex-direction: column;
    align-items: center;
    > div:not(:last-child){
        margin-right: 0;
        margin-bottom: 1rem;
    }
  }
`;

const ListActions = ({ listId, items, viewOnly, length }) => {

    const { saveList, handleDeleteSelectedItems } = useContext(AppContext);

    return (
        <>
            {viewOnly ?
                <></> :
                <ButtonsContainer>
                    <div>
                        <ActionButtons
                            backgroundColor="#DCDCDC"
                            textColor="black"
                            onClick={() => handleDeleteSelectedItems(listId)}
                            disabled={!length}>
                            Delete Selected Items
                        </ActionButtons>
                    </div>
                    <div>
                        <ActionButtons
                            onClick={() => saveList(listId, items)}
                            disabled={!length}>
                            Save List
                        </ActionButtons>
                    </div>
                </ButtonsContainer>
            }
        </>
    )
}

export default ListActions;

