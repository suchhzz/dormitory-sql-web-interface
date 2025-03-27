import ConditionPopupForm from "./ConditionPopupForm";
import ConditionRelative from "./ConditionRelative";
import UserCustomCondition from "./UserCustomCondition";
import UserTemplateCondition from "./UserTemplateCondition";
import { useEffect, useRef, useState } from "react";

export default function Condition(
    {
        handlerUpdateCondition,
        setAddConditionEnabled,
        conditionId,
        tableColumnItems
    }:
        {
            handlerUpdateCondition: (id: number) => void,
            setAddConditionEnabled: (isEnabled: boolean) => void,
            conditionId: number,
            tableColumnItems: string[]
        }) {

    const [isPopupActive, setPopupActive] = useState(false);
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
        setUserTemplateCondition(condition);
        toggleModal();
        setAddConditionEnabled(true);
    }

    const addUserCustomCondition = (condition: string) => {
        setUserCustomCondition(condition);
        toggleModal();
        setAddConditionEnabled(true);
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
                    addUserTemplateConditionHandler={addUserTemplateCondition}
                    addUserCustomConditionHandler={addUserCustomCondition}
                    conditionId={conditionId}
                />
                <ConditionRelative conditionId={conditionId} />
                <div className="condition-button condition-remove-button">
                    <div className="condition-button--content condition-remove-button--content"></div>
                </div>
                {/* {userCustomCondition && (
                    <div className="condition-button condition-edit-button">
                        <div className="condition-button--content condition-edit-button--content"></div>
                    </div>
                )} */}
                <div className="condition-button condition-edit-button">
                    <div className="condition-button--content condition-edit-button--content"></div>
                </div>
            </div>
        </>
    )
}