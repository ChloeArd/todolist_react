import './App.css';
import {List} from "../List/List";
import {useState} from "react";

function App() {

    const ListsItem = [
        {id: 1, name: "Read the book", checked: false},
        {id: 2, name: "buy dog food", checked: false},
        {id: 3, name: "call my parents", checked: false}
    ];

    const [lists, setLists] = useState([...ListsItem]);
    const [isListUpdated, setIsListUpdated] = useState(false);

    if (isListUpdated) {
        setLists(lists);
        setIsListUpdated(false);
    }

    return (
        <>
            <List lists={lists} setIsListUpdated={setIsListUpdated} setLists={setLists}/>
        </>
    );
}

export default App;
