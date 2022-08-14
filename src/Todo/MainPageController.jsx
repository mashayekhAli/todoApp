import React, { useState, createContext, useContext } from 'react';
import MainPageView from './MainPageView';

export const AppContext = createContext({
    handleAddItem: () => { },
    handleDeleteList: () => { },
    handleDeleteItem: () => { },
    handleItemCompleted: () => { },
    handleDeleteSelectedItems: () => { },
    saveList: () => { }
})

const MainPage = () => {

    const [lists, setLists] = useState([{
        id: 'list' + Date.now(),
        isSaved: false,
        items: []
    }]);

    const handleDeleteList = (listId) => {
        setLists(lists => lists.filter(list => list.id !== listId));
    }

    const handleAddItem = (listId, newItem) => {
        setLists(lists => lists.map(list => {
            if (list.id === listId) {
                let newListOfItems = [...list.items, newItem];
                return {
                    ...list,
                    items: newListOfItems
                }
            }

            return list;
        }))
    }

    const handleDeleteItem = (listId, itemId) => {
        setLists(lists => lists.map(list => {
            if (list.id === listId) {
                let newListOfItems = list.items.filter(item => item.id !== itemId);
                return {
                    ...list,
                    items: newListOfItems
                }
            }

            return list;
        }))
    }

    const handleItemCompleted = (listId, itemId) => {
        setLists(lists => lists.map(list => {
            if (list.id === listId) {
                let newItems = list.items.map(item => {
                    if (item.id === itemId) {
                        return { ...item, done: !item.done }
                    }
                    return item;
                })
                return {
                    ...list,
                    items: newItems
                }
            }

            return list;
        }))
    }

    const handleDeleteSelectedItems = (listId) => {
        setLists(lists => lists.map(list => {
            if (list.id === listId) {
                let newListOfItems = list.items.filter(item => !item.done);
                return {
                    ...list,
                    items: newListOfItems
                }
            }

            return list;
        }))
    }

    const saveList = (listId, newItems) => {
        let newEmptyList = {
            id: 'list' + Date.now(),
            isSaved: false,
            items: []
        };
        let newArray = [...lists, newEmptyList];
        setLists(lists => newArray.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    items: newItems,
                    isSaved: true
                }
            }

            return list;
        }))
    }

    const contextValue = {
        handleAddItem,
        handleDeleteList,
        handleDeleteItem,
        handleItemCompleted,
        handleDeleteSelectedItems,
        saveList
    };

    return (
        <>
            <AppContext.Provider value={contextValue}>
                <MainPageView lists={lists} />
            </AppContext.Provider>
        </>
    )
}

export default MainPage;