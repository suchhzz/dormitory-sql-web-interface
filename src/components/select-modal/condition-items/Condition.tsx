import ConditionPopupForm from "./ConditionPopupForm";
import '../../../scripts/condition-insert'
import '../../../scripts/modal'
import UserCondition from "./UserCondition";
import { useState } from "react";

export default function Condition() {

    const [isPopupActive, setPopupActive] = useState(false);

    const toggleModal = () => {   
        setPopupActive(!isPopupActive);
        console.log('toggled ' + isPopupActive);
    };

    return (
        <>
            <div className="condition-item d-flex">
                {/* <UserCondition/> */}
                <button className="condition-inner-button" onClick={toggleModal}>+
                    <ConditionPopupForm isActive={isPopupActive} />
                </button>
            </div>
        </>
    )
}