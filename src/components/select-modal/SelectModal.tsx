import ColumnItem from "./modal-items/ColumnItem";
import SelectModalBody from "./SelectModalBody";

export default function SelectModal( 
    { 
        isActive, 
        handlerCloseModal, 
        tableColumnItems
    } : 
    { 
        isActive: boolean, 
        handlerCloseModal: () => void; 
        tableColumnItems: string[]
    } ) {
    return (
        <>
            <div id="selectModal" className={`modal ${isActive ? "active" : ""}`}>
                <div className="relative-container">
                    <div className='modal-container'>
                        <div className="modal-wrapper d-grid">
                            <button id='closeModal' className="close-button close-button-modal" onClick={handlerCloseModal} >X</button>
                            <div className="modal-header">
                                <p className="modal-title">Select</p>
                                <div className="table-columns-selector">
                                    <div className="columns-wrapper d-flex">
                                        <div className="column-item selected">
                                            <p>All</p>
                                        </div>
                                        <ColumnItem />
                                        <ColumnItem />
                                        <ColumnItem />
                                        <ColumnItem />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <SelectModalBody 
                                    tableColumnItems={tableColumnItems} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-overlay">
                    </div>
                </div>
            </div>
        </>
    )
}