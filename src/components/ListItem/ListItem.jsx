import "./ListItem.css";

import {ButtonListItem} from "../ButtonListItem/ButtonListItem";

export const ListItem = function ({list, setIsListUpdated, lists}) {

    function handleAddCheckedClick() {
        list.checked = true;
        setIsListUpdated(true);
    }

    return(
        <div className="ListItem">
            <div className="width_90 flexRow align_center">
                {list.checked === false ? <input className="inputCheck" type="checkbox" onClick={handleAddCheckedClick} /> : <input className="inputCheck" type="checkbox" checked />}
                <p className={"nameList" + (list.checked === true ? " through" : "")}>{list.name}</p>
            </div>
           <ButtonListItem key={list.id} list={list} lists={lists} setIsListUpdated={setIsListUpdated} />
        </div>
    );
}
