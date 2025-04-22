import InsertModalBody from "./InsertModalBody";

export default function InsertModal( 
    { 
        isActive, 
        handlerCloseModal, 
        tableColumnItems,
        editValues,
        clearEditValue
    } : 
    { 
        isActive: boolean, 
        handlerCloseModal: () => void,
        tableColumnItems: string[],
        editValues: string[],
        clearEditValue: () => void,
    } ) 
    {
    return (
        <>
            <div id="insertModal" className={`modal ${isActive ? "active" : ""}`}>
                <div className="relative-container">
                    <div className='modal-container'>
                        <div className="modal-wrapper d-grid">
                            <button id='closeModal' className="close-button close-button-modal" onClick={handlerCloseModal}>X</button>
                            <div className="modal-header">
                                <p className="modal-title">
                                    {editValues.length > 0 ? "Update" : "Insert"}
                                </p>
                            </div>
                            <InsertModalBody
                                tableColumnItems={tableColumnItems}
                                editValues={editValues}
                                clearEditValue={clearEditValue}
                            />
                        </div>
                    </div>
                    <div className="modal-overlay">
                    </div>
                </div>
            </div>
        </>
    )
}