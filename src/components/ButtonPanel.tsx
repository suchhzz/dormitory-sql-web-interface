import { useState } from "react";
import InsertModal from "./insert-modal/InsertModal";
import SelectModal from "./select-modal/SelectModal";

export default function ButtonPanel() {

    const [isInsertModalActive, setIsInsertModalActive] = useState<boolean>(false);
    const [isSelectModalActive, setIsSelectModalActive] = useState<boolean>(false);

    const toggleInsertModal = () => {
        setIsInsertModalActive(!isInsertModalActive);
    }
    
    const toggleSelectModal = () => {
        setIsSelectModalActive(!isSelectModalActive);
    }

    return (
        <>
            <div className="buttons d-flex">
                <button id="insertBtn" className="button-item template-button template-button--blue" onClick={toggleInsertModal}>Insert</button>
                <button id="selectBtn" className="button-item template-button template-button--green" onClick={toggleSelectModal} >Select</button>
            </div>

            <InsertModal isActive={isInsertModalActive} handlerCloseModal={toggleInsertModal} />
            <SelectModal isActive={isSelectModalActive} handlerCloseModal={toggleSelectModal} />
        </>
    )
}