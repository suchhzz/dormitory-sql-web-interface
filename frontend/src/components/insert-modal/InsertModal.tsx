import InsertModalBody from "./InsertModalBody";

export default function InsertModal( 
    { 
        isActive, 
        handlerCloseModal, 
        tableColumnItems 
    } : 
    { 
        isActive: boolean, 
        handlerCloseModal: () => void,
        tableColumnItems: string[] 
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
                                <p className="modal-title">Insert</p>
                            </div>
                            <InsertModalBody
                                tableColumnItems={tableColumnItems}
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