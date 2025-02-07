// import '../../../scripts/condition-popup'

import { useState } from "react"

export default function ConditionPopupForm({ isActive, addUserConditionHandler }: { isActive : boolean; addUserConditionHandler: (condition: string) => void } )  {

    const [activeElement, setActiveElement] = useState<string | null>(null);

    const elementHandleClick = (value : string) => {

        if (value === activeElement) {
            setActiveElement("");
        }
        else {
            setActiveElement(value);
        }

    };

    const addConditionButtonHandle = () => {
        if (activeElement) {
            addUserConditionHandler(activeElement); 
        }
        else {
            console.log('no condition selected');
        }
    }

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

                                        {['=', '>', '<'].map((value) => (
                                            <div
                                                key={value}
                                                data-selected={activeElement === value ? '1' : '0'}
                                                data-value={value}
                                                className={`template-item d-flex ${activeElement === value ? "selected" : ""}`}
                                                onClick={() => elementHandleClick(value)}
                                            >
                                                {value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="body--template body--template__logic-condition-item d-grid">
                                    <div className="popup-template__title d-flex">
                                        <p>Logic</p>
                                    </div>
                                    <div className="popup-template__body d-flex">
                                        {['IS', 'NOT', 'IS NOT', 'LIKE'].map((value) => (
                                            <div
                                                key={value}
                                                data-selected={activeElement === value ? '1' : '0'}
                                                data-value={value}
                                                className={`template-item d-flex ${activeElement === value ? 'selected' : ""}`}
                                                onClick={() => elementHandleClick(value)}
                                            >
                                                {value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="body--template body--template__template-condition-item d-grid">
                                <div className="popup-template__title d-flex">
                                        <p>Template</p>
                                    </div>
                                    <div className="popup-template__body d-flex">

                                        {['BETWEEN', 'IN'].map((value) => (
                                            <div
                                                key={value}
                                                data-selected={activeElement === value ? '1' : '0'}
                                                data-value={value}
                                                className={`template-item d-flex ${activeElement === value ? 'selected' : ""}`}
                                                onClick={() => elementHandleClick(value)}
                                            >
                                                {value}
                                            </div>
                                        ))}
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
                        <button id='addConditionButton' data-selectedtab='conditionTemplate' className="button-item template-button template-button--green" onClick={() => addConditionButtonHandle()}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}