export default function ConditionPopupForm() {
    return (
        <>
            <div className="popup-insert-form">
                <div className="popup-insert-form--wrapper d-grid">
                    <div className="popup-form popup-form--header d-flex">
                        <div data-insertConditionTab="conditionDefault" className="tab-item">
                            <p>Default</p>
                        </div>
                        <div data-insertConditionTab="conditionTemplate" className="tab-item">
                            <p>Template</p>
                        </div>
                        <div data-insertConditionTab="conditionCustom" className="tab-item">
                            <p>Custom</p>
                        </div>
                    </div>
                    <div className="popup-form popup-form--body">
                        <div id='conditionDefault' className="condition-field body--default"></div>
                        <div id='conditionTemplate' className="condition-field body--template"></div>
                        <div id='conditionCustom' className="condition-field body--custom d-flex">
                            <textarea className="custom-textarea-item">

                            </textarea>
                        </div>
                    </div>
                    <div className="popup-form popup-form--footer d-flex">
                        <button className="button-item button-item--select">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}