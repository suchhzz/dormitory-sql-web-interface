import ColumnItem from "./modal-items/ColumnItem";
import SelectModalBody from "./SelectModalBody";

export default function SelectModal() {
    return (
        <>
            <div id="selectModal" className="modal">
                <div className="relative-container">
                    <div className='modal-container'>
                        <div className="modal-wrapper d-grid">
                            <button id='closeModal' className="close-button close-button-modal">X</button>
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
                                <SelectModalBody />
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