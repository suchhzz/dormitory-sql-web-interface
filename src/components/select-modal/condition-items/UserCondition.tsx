import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UserCondition({ column, values, operator }: { column?: string; values?: string[]; operator?: string }) {

    const [activeColumn, setActiveColumn] = useState<string>(column ?? "column");
    const [activeValues, setActiveValues] = useState<string[]>(values ?? ["value"]);
    const [activeOperator, setActiveOperator] = useState<string>(operator ?? "");

    const [typeInConditionModalActive, setTypeInConditionModalActive] = useState<boolean>(false);
    const [typeInConditionInputValue, setTypeInConditionInputValue] = useState<string>("");

    const [activeColumnInput, setActiveColumnInput] = useState<string>("");

    const [selectedPopupId, setSelectedPopupId] = useState<number>(-1);

    const togglePopup = (id: number) => {
        let currentid;

        id === selectedPopupId ? currentid = -1 : currentid = id;

        setSelectedPopupId(currentid);

        console.log(selectedPopupId);
    }

    const preventButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }


    const toggleInConditionModal = () => {
        setTypeInConditionModalActive(!typeInConditionModalActive);
    }

    const handleActiveColumnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveColumnInput(event.target.value);
    }

    const handleActiveColumnAddButton = () => {
        setActiveColumn(activeColumnInput);
        setActiveColumnInput("");
    }



    const [activeValueInput, setActiveValueInput] = useState<string>("");

    const handleActiveValueInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveValueInput(event.target.value);
    }

    const handleActiveValueAddButton = (index: number) => {
        setActiveValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = activeValueInput;
            return updatedValues;
        });
    };





    const handleTypeInConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeInConditionInputValue(event.target.value);
    }

    const handleTypeInConditionAddButton = () => {
        setValuesInOperator(typeInConditionInputValue);
        setTypeInConditionInputValue("");
        toggleInConditionModal();
    }


    const setValuesBetweenOperator = () => {
        setActiveValues(["value", "value"]);
    }

    const setValuesInOperator = (inConditionValue: string) => {
        setActiveValues(prevValues => [...activeValues, inConditionValue]);
    }

    useEffect(() => {
        if (operator === "BETWEEN") {
            setValuesBetweenOperator();
        }
    }, [operator]);

    useEffect(() => {
        if (values && values.length > 0) {
            setActiveValues(prevValues => [...prevValues, values[values.length - 1]]);
        }
    }, [values]);

    return (

        <>
            <div className="user-condition-item">
                <div className="user-condition-item--wrapper d-flex">
                    <div className="condition-value condition--column">
                        <p>
                            {activeColumn}
                        </p>
                        <div className={`condition-change-value-popup d-flex ${false ? "active" : ""}`} onClick={preventButtonClick}>
                            <input type="text" placeholder="value"
                                value={activeColumnInput}
                                onChange={handleActiveColumnInputChange}
                            ></input>
                            <button className="template-button template-button--green"
                                onClick={handleActiveColumnAddButton}
                            >Add</button>
                        </div>
                    </div>
                    <div className="condition-value condition--operator">
                        <p>{activeOperator}</p>
                    </div>
                    {activeOperator === "BETWEEN" ? (
                        <>
                            <div key={0} className="condition-value condition--values" onClick={() => togglePopup(0)}>
                                <p>{activeValues[0]}</p>
                                <div className={`condition-change-value-popup d-flex ${0 === selectedPopupId ? "active" : ""}`} onClick={preventButtonClick}>
                                    <input type="text" placeholder="value"
                                        value={activeValueInput}
                                        onChange={handleActiveValueInputChange}
                                    ></input>
                                    <button className="template-button template-button--green"
                                        onClick={() => handleActiveValueAddButton(0)}
                                    >Add</button>
                                </div>
                            </div>
                            <div className="condition-value condition--values">
                                <p>AND</p>
                            </div>
                            <div key={1} className="condition-value condition--values" onClick={() => togglePopup(1)}>
                                <p>{activeValues[1]}</p>
                                <div className={`condition-change-value-popup d-flex ${1 === selectedPopupId ? "active" : ""}`} onClick={preventButtonClick}>
                                    <input type="text" placeholder="value"
                                        value={activeValueInput}
                                        onChange={handleActiveValueInputChange}
                                    ></input>
                                    <button className="template-button template-button--green"
                                        onClick={() => handleActiveValueAddButton(1)}
                                    >Add</button>
                                </div>
                            </div>
                        </>
                    ) : activeOperator === "IN" ? (
                        <>
                            <div className="condition-in-value d-flex">
                                <p>(</p>
                                {activeValues.map((value, index) => {
                                    return (
                                        <>
                                            <div key={index} className="condition-value condition--values" onClick={() => togglePopup(index)}>
                                                <p>{index === activeValues.length - 1 ? value : `${value},`}</p>
                                                <div className={`condition-change-value-popup d-flex ${index === selectedPopupId ? "active" : ""}`} onClick={preventButtonClick}>
                                                    <input type="text" placeholder="value"
                                                        value={activeValueInput}
                                                        onChange={handleActiveValueInputChange}
                                                    ></input>
                                                    <button className="template-button template-button--green"
                                                        onClick={() => handleActiveValueAddButton(index)}
                                                    >Add</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <button className="condition-in-add-value-button"
                                    onClick={toggleInConditionModal}
                                >+</button>
                                <div className={`condition-change-value-popup d-flex ${typeInConditionModalActive ? "active" : ""}`}>
                                    <input type="text" placeholder="value"
                                        value={typeInConditionInputValue}
                                        onChange={handleTypeInConditionChange}
                                    ></input>
                                    <button className="template-button template-button--green"
                                        onClick={handleTypeInConditionAddButton}
                                    >Add</button>
                                </div>
                                <p>)</p>
                            </div>
                        </>
                    ) : (
                        activeValues.map((value, index) => {
                            return (
                                <>
                                    <div key={index} className="condition-value condition--values"
                                        onClick={() => togglePopup(index)}
                                    >
                                        <p >{value}</p>
                                        <div className={`condition-change-value-popup d-flex ${index === selectedPopupId ? "active" : ""}`} onClick={preventButtonClick}>
                                            <input type="text" placeholder="value"
                                                value={activeValueInput}
                                                onChange={handleActiveValueInputChange}
                                            ></input>
                                            <button className="template-button template-button--green"
                                                onClick={() => handleActiveValueAddButton(index)}
                                            >Add</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    )}
                </div>
            </div>
        </>
    )
}