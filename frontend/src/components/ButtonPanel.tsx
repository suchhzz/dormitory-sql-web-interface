import { useEffect, useState } from "react";
import InsertModal from "./insert-modal/InsertModal";
import SelectModal from "./select-modal/SelectModal";

export default function ButtonPanel(
    {
        tableColumnItems,
        tableName,
        editValues,
        clearEditValue
    }:
    {
        tableColumnItems: string[],
        tableName: string,
        editValues: string[],
        clearEditValue: () => void 
    }
) {

    const [isInsertModalActive, setIsInsertModalActive] = useState<boolean>(false);
    const [isSelectModalActive, setIsSelectModalActive] = useState<boolean>(false);

    useEffect(() => {
        if (editValues.length > 0) {
            toggleInsertModal();
        }
    }, [editValues])


    const toggleInsertModal = () => {

        if (isInsertModalActive) {
            clearEditValue();
            console.log('modal, clearing');
            
        }

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

            <InsertModal 
                isActive={isInsertModalActive}
                handlerCloseModal={toggleInsertModal} 
                tableColumnItems={tableColumnItems}
                editValues={editValues}
                clearEditValue={clearEditValue}
            />
            <SelectModal 
                isActive={isSelectModalActive} 
                handlerCloseModal={toggleSelectModal} 
                tableColumnItems={tableColumnItems} 
                tableName={tableName}
            />
        </>
    )
}