import { useState } from "react";
import Condition from "./condition-items/Condition";
import '../../scripts/modal'

export default function SelectModalBody() {

    const [conditions, setConditions] = useState<number[]>([]);
    
    const addNewCondition = () => {
        setConditions([...conditions, Date.now()]);
    }

    return (
        <>
            <div className="select-modal-wrapper-body d-grid">
                <div className="select-modal-section select-from-section">
                    <label className="select-from-label label-form d-flex">
                        From table
                        <input type='text' readOnly value={'table1'} className='form-item-input'></input>
                    </label>
                </div>
                <div className="select-modal-section select-condition-section">
                    <label className="label-form">Condition</label>
                    <div className="condition-wrapper d-grid">
                        {conditions.map(id => (
                            <Condition key={id} />
                        ))}
                    </div>
                    <button className="add-condition-button" onClick={addNewCondition}>+</button>
                </div>
            </div>
        </>
    )
}