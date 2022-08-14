import React, { useState } from 'react';
import ListCard from './_components/ListCard';
import { Card } from '../CommonStyledComponents/Card';
import styled from 'styled-components'
import { CardTitle, BigHeader } from '../CommonStyledComponents/Typography';
import { Divider } from '../CommonStyledComponents/Dividers';
import { TabButton } from '../CommonStyledComponents/Buttons';
import {TitleDiv,LeftContainer,SavedListsWrapper,AppLayout,FlexBox} from './MainPageStyles';

const MainPageView = ({ lists }) => {

    const [tab, setTab] = useState(true);

    return (
        <>
            <AppLayout>
                <TitleDiv>
                    <BigHeader>TO DO LIST</BigHeader>
                    <TabButton onClick={() => setTab(!tab)}>{tab ? "Saved List" : "New List"}</TabButton >
                </TitleDiv>
                <FlexBox>
                    <div className={!tab ? " hide-on-mobile " : ""}>
                        <LeftContainer>
                            <CardTitle >New List</CardTitle>
                            <Divider></Divider>

                            {lists.filter(list => !list.isSaved).map(list => (
                                <ListCard key={list.id} list={list}
                                />
                            ))}
                        </LeftContainer>
                    </div>
                    <div className={tab ? " hide-on-mobile " : ""}>
                        <Card bgColor="#323435">
                            <CardTitle isLight>Saved Lists</CardTitle>
                            <Divider color='#afafaf'></Divider>

                            <SavedListsWrapper>
                                {
                                    lists.filter(list => list.isSaved).map(list => (
                                        <ListCard key={list.id} list={list}
                                        />
                                    ))
                                }
                            </SavedListsWrapper>
                        </Card>
                    </div>
                </FlexBox>
            </AppLayout>
        </>
    )
}

export default MainPageView;