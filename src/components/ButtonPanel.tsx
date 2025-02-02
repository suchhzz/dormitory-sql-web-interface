import InsertModal from "./insert-modal/InsertModal";
import SelectModal from "./select-modal/SelectModal";

export default function ButtonPanel() {
    return (
        <>
            <div className="buttons d-flex">
                <button id="insertBtn" className="button-item button-item--insert">Insert</button>
                <button id="selectBtn" className="button-item button-item--select">Select</button>
            </div>

            <InsertModal />
            <SelectModal />
        </>
    )
}