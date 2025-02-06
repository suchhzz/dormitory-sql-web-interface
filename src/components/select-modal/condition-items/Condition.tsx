import ConditionPopupForm from "./ConditionPopupForm";
import '../../../scripts/condition-insert'
import UserCondition from "./UserCondition";

export default function Condition() {
    return (
        <>
            <div className="condition-item d-flex">
                <UserCondition/>
                <button className="condition-inner-button">+
                    <ConditionPopupForm />
                </button>
            </div>
        </>
    )
}