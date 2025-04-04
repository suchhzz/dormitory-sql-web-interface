import { useEffect, useState } from "react";
import { queryBuilder } from "../../scripts/query/queryBuilder";
import Condition from "./condition-items/Condition";

export default function SelectModalBody( 
    {
        tableColumnItems,
        tableName
    }: 
    {
        tableColumnItems: string[],
        tableName: string
    }
 ) {

    const [conditions, setConditions] = useState<number[]>([]);
    const [isAddConditionButtonEnabled, setIsAddConditionButtonEnabled] = useState<boolean>(true);
    const [conditionIdCounter, setConditionIdCounter] = useState<number>(0);

    useEffect(() => {
        console.log(conditions);
    }, [conditions]);
    
    const addNewCondition = () => {
        setConditions((prev) => [...prev, conditionIdCounter]);
        setConditionIdCounter((prev) => prev + 1);
    };

    const updateCondition = (conditionId: number) => {
        console.log(conditionId);
    }

    const removeCondition = (conditionId: number) => {
        setConditions((prev) => {
            return prev.filter((index) => index !== conditionId);
        });

        queryBuilder.removeCondition(conditionId);
    }

    const editCustomCondition = (conditionId: number, newConditionContent: string) => {
        queryBuilder.editCustomCondition(conditionId, newConditionContent);
    }

    return (
        <>
            <div className="select-modal-wrapper-body d-grid">
                <div className="select-modal-section select-from-section">
                    <label className="select-from-label label-form d-flex">
                        From table
                        <input type='text' readOnly value={tableName} className='form-item-input'></input>
                    </label>
                </div>
                <div className="select-modal-section select-condition-section">
                    <label className="label-form">Condition</label>
                    <div className="condition-wrapper d-grid">
                        {conditions.map((item, index) => (
                            <Condition
                                key={item}
                                handlerUpdateCondition = {updateCondition}
                                setAddConditionEnabled={setIsAddConditionButtonEnabled}
                                removeConditionHandler={removeCondition}
                                editCustomCondition={editCustomCondition}
                                conditionId = {item}
                                tableColumnItems={tableColumnItems}  
                            />
                        ))}
                    </div>
                    <button className="add-condition-button" 
                        onClick={addNewCondition} 
                        disabled={!isAddConditionButtonEnabled}
                    >+</button>
                </div>
            </div>
        </>
    )
}