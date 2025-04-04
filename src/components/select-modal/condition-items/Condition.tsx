import ConditionPopupForm from "./ConditionPopupForm";
import ConditionRelative from "./ConditionRelative";
import UserCustomCondition from "./UserCustomCondition";
import UserTemplateCondition from "./UserTemplateCondition";
import { useEffect, useRef, useState } from "react";

export default function Condition(
    {
        handlerUpdateCondition,
        setAddConditionEnabled,
        removeConditionHandler,
        editCustomCondition,
        conditionId,
        tableColumnItems
    }:
        {
            handlerUpdateCondition: (id: number) => void,
            setAddConditionEnabled: (isEnabled: boolean) => void,
            removeConditionHandler: (conditionId: number) => void,
            editCustomCondition: (conditionId: number, conditionContent: string) => void,
            conditionId: number,
            tableColumnItems: string[]
        }) {

    const [isPopupActive, setPopupActive] = useState(false);
    const [isCustomConditionEditing, setIsCustomConditionEditing] = useState(false);
    const [userTemplateCondition, setUserTemplateCondition] = useState<string>("");
    const [userCustomCondition, setUserCustomCondition] = useState<string>("");
    const addConditionDisabled = useRef(false);

    useEffect(() => {
        if (!addConditionDisabled.current) {
            setAddConditionEnabled(false);
            addConditionDisabled.current = true;
        }
    }, []);

    const toggleModal = () => {
        setPopupActive(!isPopupActive);
    };

    const addUserTemplateCondition = (condition: string) => {
        
        try {
            setUserTemplateCondition(condition);
            toggleModal();
            setAddConditionEnabled(true);
        } catch (e) {
            console.error(e);
        }
        
    }

    const addUserCustomCondition = (condition: string) => {
        setUserCustomCondition(condition);
        toggleModal();
        setAddConditionEnabled(true);
    }

    const editUserCustomCondition = (condition: string) => {

        console.log('condition text:', condition);
        

        setUserCustomCondition(condition);
        toggleModal();
        setAddConditionEnabled(true);

        editCustomCondition(conditionId, condition);
    }

    const toggleEditCustomCondition = () => {
        setPopupActive(!isPopupActive);
        setIsCustomConditionEditing(!isCustomConditionEditing);
    }

    return (
        <>
            <div className="condition-item d-flex">
                {userTemplateCondition !== "" && <UserTemplateCondition
                    operator={userTemplateCondition}
                    handlerUpdateUserCondition={handlerUpdateCondition}
                    conditionId={conditionId}
                    tableColumnItems={tableColumnItems}
                />}
                {userCustomCondition !== "" && <UserCustomCondition
                    conditionContent={userCustomCondition}
                    conditionId={conditionId}
                />}
                {userTemplateCondition === "" && userCustomCondition === "" && (
                    <button className="condition-inner-button" onClick={toggleModal}>+</button>
                )}
                <ConditionPopupForm
                    isActive={isPopupActive}
                    isEditing={isCustomConditionEditing}
                    addUserTemplateConditionHandler={addUserTemplateCondition}
                    addUserCustomConditionHandler={addUserCustomCondition}
                    editUserCustomConditionHandler={editUserCustomCondition}
                    conditionId={conditionId}
                />
                <ConditionRelative conditionId={conditionId} />
                <div className="condition-button condition-remove-button"
                    onClick={() => {removeConditionHandler(conditionId)}}
                >
                    <div className="condition-button--content condition-remove-button--content"></div>
                </div>
                {userCustomCondition && (
                    <div className="condition-button condition-edit-button"
                        onClick={toggleEditCustomCondition}
                    >
                        <div className="condition-button--content condition-edit-button--content"></div>
                    </div>
                )}
            </div>
        </>
    )
}