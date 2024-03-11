// Single Selection
//Multiple selection

import { useState } from "react"
import data from "./data";
import "./style.css"
export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(CurrentSelectQuestion) {
        setSelected(CurrentSelectQuestion === selected ? null : CurrentSelectQuestion);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId,1)

        setMultiple(cpyMultiple);
    }

    console.log("SelectedId", selected,multiple)
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable all selection</button>
        <div className="Accordion">
            {
                data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={enableMultiSelect ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
                            }
                        </div>

                    ))
                    : <div> No data found</div>
            }
        </div>
    </div >
}