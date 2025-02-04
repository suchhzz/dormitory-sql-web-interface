import InsertModal from "./insert-modal/InsertModal";
import SelectModal from "./select-modal/SelectModal";

export default function ButtonPanel() {
    return (
        <>
            <div className="buttons d-flex">
                <button id="insertBtn" className="button-item template-button template-button--blue">Insert</button>
                <button id="selectBtn" className="button-item template-button template-button--green">Select</button>
            </div>

            <InsertModal />
            <SelectModal />
        </>
    )
}