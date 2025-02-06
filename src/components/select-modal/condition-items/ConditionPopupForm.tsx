// import '../../../scripts/condition-popup'

export default function ConditionPopupForm({ isActive } : { isActive : boolean } )  {
    return (
        <>
        <div className={`popup-insert-form ${isActive ? 'active' : ''}`}>
                <div className="popup-insert-form--wrapper d-grid">
                    <div className="popup-form popup-form--header d-grid">
                        <div data-insertConditionTab="conditionTemplate" className="tab-item active">
                            <p>Template</p>
                        </div>
                        <div data-insertConditionTab="conditionCustom" className="tab-item">
                            <p>Custom</p>
                        </div>
                    </div>
                    <div className="popup-form popup-form--body">
                        <div id='conditionTemplate' className="condition-field body--template active">
                            <div className="condition-field-wrapper d-grid">
                                <div className="body--template body--template__regular-condition-item d-grid">
                                    <div className="popup-template__title d-flex">
                                        <p>Regular</p>
                                    </div>
                                    <div className="popup-template__body d-flex">
                                        <div data-selected='0' data-value='=' className="template-item d-flex regular--equal">
                                            <p>=</p>
                                        </div>
                                        <div data-selected='0' data-value='>' className="template-item d-flex regular--greater">
                                            <p>&gt;</p>
                                        </div>
                                        <div data-selected='0' data-value='<' className="template-item d-flex regular--less">
                                            <p>&lt;</p>
                                        </div>
                                        <div data-selected='0' data-value='' className="template-item regular--value">
                                        </div>
                                    </div>
                                </div>
                                <div className="body--template body--template__logic-condition-item d-grid">
                                    <div className="popup-template__title d-flex">
                                        <p>Logic</p>
                                    </div>
                                    <div className="popup-template__body d-flex">
                                        <div data-selected='0' data-value='IS' className="template-item d-flex logic--is">
                                            <p>IS</p>
                                        </div>
                                        <div data-selected='0' data-value='NOT' className="template-item d-flex logic--not">
                                            <p>NOT</p>
                                        </div>
                                        <div data-selected='0' data-value='IS NOT' className="template-item d-flex regular--is-not">
                                            <p>IS NOT</p>
                                        </div>
                                        <div data-selected='0' data-value='IS NOT' className="template-item d-flex regular--is-not">
                                            <p>LIKE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="body--template body--template__template-condition-item d-grid">
                                <div className="popup-template__title d-flex">
                                        <p>Template</p>
                                    </div>
                                    <div className="popup-template__body d-flex">
                                        <div data-selected='0' data-value='BETWEEN' className="template-item d-flex template--between">
                                            <p>BETWEEN ... AND ...</p>
                                        </div>
                                        <div data-selected='0' data-value='IN' className="template-item d-flex template--in">
                                            <p>IN (...)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='conditionCustom' className="condition-field body--custom d-flex">
                            <textarea className="custom-textarea-item template-text-input">
                            </textarea>
                        </div>
                    </div>
                    <div className="popup-form popup-form--footer d-flex">
                        <button id='addConditionButton' data-selectedtab='conditionTemplate' className="button-item template-button template-button--green">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}