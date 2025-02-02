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
                                    <div className="column-item selected">
                                        <div className="column-options-wrapper d-flex">
                                                <div className="option option--function">
                                                    <div className="option-menu d-flex">
                                                        <p data-columnOptionFunction='count' className="option-menu--item-function">COUNT()</p>
                                                        <p data-columnOptionFunction='sum' className="option-menu--item-function">SUM()</p>
                                                        <p data-columnOptionFunction='avg' className="option-menu--item-function">AVG()</p>
                                                        <p data-columnOptionFunction='max' className="option-menu--item-function">MAX()</p>
                                                        <p data-columnOptionFunction='min' className="option-menu--item-function">MIN()</p>
                                                    </div>
                                                </div>
                                                <div className="option option--alias">
                                                    <div className="option-menu">
                                                        <label className="label-form d-flex">
                                                            Alias
                                                            <div className="input-container d-flex">
                                                                <input className="form-item-input option-menu--item-alias" type='text'></input>
                                                                <button className="option-alias-change-btn">X</button>
                                                            </div>

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>column</p>
                                        </div>
                                        
                                    <div className="column-item selected">
                                        <div className="column-options-wrapper d-flex">
                                                <div className="option option--function">
                                                    <div className="option-menu d-flex">
                                                        <p data-columnOptionFunction='count' className="option-menu--item-function">COUNT()</p>
                                                        <p data-columnOptionFunction='sum' className="option-menu--item-function">SUM()</p>
                                                        <p data-columnOptionFunction='avg' className="option-menu--item-function">AVG()</p>
                                                        <p data-columnOptionFunction='max' className="option-menu--item-function">MAX()</p>
                                                        <p data-columnOptionFunction='min' className="option-menu--item-function">MIN()</p>
                                                    </div>
                                                </div>
                                                <div className="option option--alias">
                                                    <div className="option-menu">
                                                        <label className="label-form d-flex">
                                                            Alias
                                                            <div className="input-container d-flex">
                                                                <input className="form-item-input option-menu--item-alias" type='text'></input>
                                                                <button className="option-alias-change-btn">X</button>
                                                            </div>

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>column</p>
                                        </div>
                                    <div className="column-item">
                                        <div className="column-options-wrapper d-flex">
                                                <div className="option option--function">
                                                    <div className="option-menu d-flex">
                                                        <p data-columnOptionFunction='count' className="option-menu--item-function">COUNT()</p>
                                                        <p data-columnOptionFunction='sum' className="option-menu--item-function">SUM()</p>
                                                        <p data-columnOptionFunction='avg' className="option-menu--item-function">AVG()</p>
                                                        <p data-columnOptionFunction='max' className="option-menu--item-function">MAX()</p>
                                                        <p data-columnOptionFunction='min' className="option-menu--item-function">MIN()</p>
                                                    </div>
                                                </div>
                                                <div className="option option--alias">
                                                    <div className="option-menu">
                                                        <label className="label-form d-flex">
                                                            Alias
                                                            <div className="input-container d-flex">
                                                                <input className="form-item-input option-menu--item-alias" type='text'></input>
                                                                <button className="option-alias-change-btn">X</button>
                                                            </div>

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>column</p>
                                        </div>
                                    <div className="column-item">
                                        <div className="column-options-wrapper d-flex">
                                                <div className="option option--function">
                                                    <div className="option-menu d-flex">
                                                        <p data-columnOptionFunction='count' className="option-menu--item-function">COUNT()</p>
                                                        <p data-columnOptionFunction='sum' className="option-menu--item-function">SUM()</p>
                                                        <p data-columnOptionFunction='avg' className="option-menu--item-function">AVG()</p>
                                                        <p data-columnOptionFunction='max' className="option-menu--item-function">MAX()</p>
                                                        <p data-columnOptionFunction='min' className="option-menu--item-function">MIN()</p>
                                                    </div>
                                                </div>
                                                <div className="option option--alias">
                                                    <div className="option-menu">
                                                        <label className="label-form d-flex">
                                                            Alias
                                                            <div className="input-container d-flex">
                                                                <input className="form-item-input option-menu--item-alias" type='text'></input>
                                                                <button className="option-alias-change-btn">X</button>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>column</p>
                                        </div>
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