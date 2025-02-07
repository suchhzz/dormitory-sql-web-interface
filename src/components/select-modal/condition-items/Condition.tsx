import ConditionPopupForm from "./ConditionPopupForm";
import '../../../scripts/condition-insert'
import '../../../scripts/modal'
import UserCondition from "./UserCondition";
import { useState } from "react";

export default function Condition() {

    const [isPopupActive, setPopupActive] = useState(false);
    const [userCondition, setUserCondition] = useState<string>("");

    const toggleModal = () => {   
        setPopupActive(!isPopupActive);
        console.log('toggled ' + isPopupActive);
    };

    const addUserCondition = (condition : string) => {
        console.log(condition);
        setUserCondition(condition);
    }

    return (
        <>
            <div className="condition-item d-flex">
                {userCondition && <UserCondition
                    
                />}
                <button className="condition-inner-button" onClick={toggleModal}>+
                </button>
                <ConditionPopupForm isActive={isPopupActive} addUserConditionHandler={addUserCondition} />
            </div>
        </>
    )
}