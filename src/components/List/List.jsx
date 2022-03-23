import "./List.css";

import {ListItem} from "../ListItem/ListItem";
import {faClose, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const List = function ({lists, setIsListUpdated}) {

    function countChecked() {
        let checkedList = [];
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].checked === true) {
                checkedList.push(lists[i].id);
            }
        }
        return checkedList.length;
    }

    function handleRemoveCheckedClick() {
        lists.map(list => list.checked = false);
        setIsListUpdated(true);
    }

    function handleAddListClick() {
        let newList = document.getElementById("inputList").value;
        lists.push({id: lists.length + 1, name: newList, checked: false});
        setIsListUpdated(true);
        document.getElementById("inputList").value = "";

    }

    return (
        <div className="List">
            <h1>TODOLIST</h1>
            <div className="flexRow">
                <input type="text" name="list" id="inputList"/>
                <button type="submit" className="addList" onClick={handleAddListClick}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className="flexColumn">
                {lists.map(list => <ListItem key={list.id} list={list} lists={lists} setIsListUpdated={setIsListUpdated} />)}
            </div>
            <div className="flexRow">
                <div className="tasks"><span className="bold">{countChecked()}</span> of <span className="bold">{lists.length}</span> tasks done
                </div>
                <button id="remove" onClick={handleRemoveCheckedClick}>Remove checked <span className="bold"><FontAwesomeIcon icon={faClose} /></span></button>
            </div>
        </div>
    );
}