import "./ButtonListItem.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose, faPen} from '@fortawesome/free-solid-svg-icons'


export const ButtonListItem = function ({list, setIsListUpdated, lists}) {


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
        <div className="ButtonListItem flexRow2">
            <div className="width_10 flexRow2">
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
