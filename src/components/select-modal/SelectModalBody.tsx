export default function SelectModalBody() {
    return (
        <>
            <div className="select-modal-wrapper-body d-grid">
                <div className="select-modal-section select-from-section">
                    <label className="select-from-label label-form d-flex">
                        From table
                        <input type='text' readOnly value={'table1'} className='form-item-input'></input>
                    </label>
                </div>
                <div className="select-modal-section select-condition-section">
                    
                </div>
            </div>
        </>
    )
}