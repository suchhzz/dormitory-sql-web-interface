import ConditionPopupForm from "./ConditionPopupForm";
import UserCondition from "./UserCondition";
import { useState } from "react";

export default function Condition( 
    { 
        handlerUpdateCondition, 
        conditionId,
        tableColumnItems
    }: 
    { 
        handlerUpdateCondition: (id: number) => void, 
        conditionId: number,
        tableColumnItems: string[]
    } ) {

    const [isPopupActive, setPopupActive] = useState(false);
    const [userCondition, setUserCondition] = useState<string>("");

    const toggleModal = () => {   
        setPopupActive(!isPopupActive);
        console.log('toggled ' + isPopupActive);
    };

    const addUserCondition = (condition : string) => {
        setUserCondition(condition);
        toggleModal();
    }

    return (
        <>
            <div className="condition-item d-flex">
                {userCondition && <UserCondition
                    operator={userCondition}
                    handlerUpdateUserCondition = {handlerUpdateCondition}
                    conditionId = {conditionId}
                    tableColumnItems={tableColumnItems}
                />}
                {!userCondition && (
                    <button className="condition-inner-button" onClick={toggleModal}>+</button>
                )}
                <ConditionPopupForm isActive={isPopupActive} addUserConditionHandler={addUserCondition} />
            </div>
        </>
    )
}