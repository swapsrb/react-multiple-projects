// single selection

import { useState } from "react"
import data from "./data";
import './styles.css';


// multiple selection

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [ids, setIds] = useState([]);

    function handleSingleSelection(dataId) {
        // console.log(dataId);
        setSelected(selected === dataId ? null : dataId);
    }

    function handleMultipleSelection(dataId) {
        let copyArr = [...ids];
        const dataIdIndex = copyArr.indexOf(dataId);
        if (dataIdIndex === -1) copyArr.push(dataId)
        else copyArr.splice(dataIdIndex, 1);
        setIds(copyArr);
    }

    console.log(ids);

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>

        <div className="accordion">
            {
                data && data.length > 0
                    ?
                    data.map((dataItem) => <div className="item">
                        <div onClick={enableMultiSelection
                            ? () => handleMultipleSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {enableMultiSelection
                            ? ids.indexOf(dataItem.id) !== -1 && (<div className="content">{dataItem.answer}</div>)
                            : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)
                        }
                    </div>)
                    : <div>No data found!</div>
            }
        </div>

    </div>
}