import ConditionPopupForm from "./ConditionPopupForm";
import ConditionRelative from "./ConditionRelative";
import UserCustomCondition from "./UserCustomCondition";
import UserTemplateCondition from "./UserTemplateCondition";
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
    const [userTemplateCondition, setUserTemplateCondition] = useState<string>("");
    const [userCustomCondition, setUserCustomCondition] = useState<string>("");

    const toggleModal = () => {   
        setPopupActive(!isPopupActive);
    };

    const addUserTemplateCondition = (condition : string) => {
        setUserTemplateCondition(condition);
        toggleModal();
    }

    const addUserCustomCondition = (condition: string) => {
        setUserCustomCondition(condition);
        toggleModal();
    }

    return (
        <>
            <div className="condition-item d-flex">
                {userTemplateCondition !== "" && <UserTemplateCondition
                    operator={userTemplateCondition}
                    handlerUpdateUserCondition = {handlerUpdateCondition}
                    conditionId = {conditionId}
                    tableColumnItems={tableColumnItems}
                />}
                {userCustomCondition !== "" && <UserCustomCondition 
                    conditionContent={userCustomCondition}
                />}
                {userTemplateCondition === "" && userCustomCondition === "" && (
                    <button className="condition-inner-button" onClick={toggleModal}>+</button>
                )}
                <ConditionPopupForm 
                    isActive={isPopupActive} 
                    addUserTemplateConditionHandler={addUserTemplateCondition} 
                    addUserCustomConditionHandler={addUserCustomCondition}
                />
                <ConditionRelative conditionId={conditionId} />
            </div>
        </>
    )
}