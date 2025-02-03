import ConditionPopupForm from "./ConditionPopupForm";
import '../../../scripts/condition-insert'

export default function Condition() {
    return (
        <>
            <div className="condition-item d-flex">
                <button className="condition-inner-button">+
                    <ConditionPopupForm />
                </button>
            </div>
        </>
    )
}