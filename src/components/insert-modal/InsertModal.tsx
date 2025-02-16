
export default function InsertModal( { isActive, handlerCloseModal, } : { isActive: boolean, handlerCloseModal: () => void; } ) {
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
                            <div className="modal-body">
                                <form className="modal-form d-flex">
                                    <label className="label-form d-flex">
                                        input
                                        <input type="text" className="form-item-input"></input>
                                    </label>
                                    <label className="label-form d-flex">
                                        input
                                        <input type="text" className="form-item-input"></input>
                                    </label>
                                    <label className="label-form d-flex">
                                        input
                                        <input type="text" className="form-item-input"></input>
                                    </label>
                                    <label className="label-form d-flex">
                                        input
                                        <input type="text" className="form-item-input"></input>
                                    </label>
                                    <input type='submit' placeholder="Insert" className="form-btn-submit"></input>
                                </form>
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