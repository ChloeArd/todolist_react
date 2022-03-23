import "./ListItem.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose, faPen} from '@fortawesome/free-solid-svg-icons'


export const ListItem = function ({list, setIsListUpdated, setLists, lists}) {

    function handleAddCheckedClick() {
        list.checked = true;
        setIsListUpdated(true);
    }

    function isLists(value) {
        return value.name === list.name;
    }

    function handleDeleteListClick() {
        let find = lists.find(isLists)
        let index = lists.indexOf(find);
        lists.splice(index, 1);
        setIsListUpdated(true);
    }

    function handleDisplayContainerEditClick() {
        document.getElementById("container" + list.id).style.display = "flex";
    }

    function handleDisplayNoneContainerEditClick() {
        document.getElementById("container" + list.id).style.display = "none";
    }

    function handleEditListClick() {
        list.name = document.getElementById("editList" + list.id).value;
        setIsListUpdated(true);
    }

    return(
        <div className="ListItem">
            <div className="width_90 flexRow align_center">
                {list.checked === false ? <input className="inputCheck" type="checkbox" onClick={handleAddCheckedClick} /> : <input className="inputCheck" type="checkbox" checked />}
                <p className={"nameList" + (list.checked === true ? " through" : "")}>{list.name}</p>
            </div>
            <div className="width_10">
                <button className="edit" onClick={handleDisplayContainerEditClick}><FontAwesomeIcon icon={faPen} /></button>
                <button className="delete" onClick={handleDeleteListClick}><FontAwesomeIcon icon={faClose} /></button>
            </div>
            <div className="displayList" id={"container" + list.id}>
                <input type="text" id={"editList" + list.id}/>
                <button onClick={handleEditListClick} className="buttonOk">Ok</button>
                <button onClick={handleDisplayNoneContainerEditClick} className="buttonClose"><FontAwesomeIcon icon={faClose} /></button>
            </div>
        </div>
    );
}
