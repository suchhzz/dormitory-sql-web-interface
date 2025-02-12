import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UserCondition({ column, values, operator }: { column?: string; values?: string[]; operator?: string }) {

    const [activeColumn, setActiveColumn] = useState<string>(column ?? "column");
    const [activeValues, setActiveValues] = useState<string[]>(values ?? ["value"]);
    const [activeOperator, setActiveOperator] = useState<string>(operator ?? "");

    const [typeInConditionModalActive, setTypeInConditionModalActive] = useState<boolean>(false);
    const [typeInConditionInputValue, setTypeInConditionInputValue] = useState<string>("");

    const [activeColumnInput, setActiveColumnInput] = useState<string>("");

    const [selectedPopupId, setSelectedPopupId] = useState<string | null>(null);

    const togglePopup = (id: string) => {
        setSelectedPopupId(prevId => (prevId === id ? null : id));
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
                        <div className={`condition-change-value-popup d-flex ${typeInConditionModalActive ? "active" : ""}`} onClick={preventButtonClick}>
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
                            <div key={uuidv4()} className="condition-value condition--values">
                                <p>{activeValues[0]}</p>
                            </div>
                            <div className="condition-value condition--values">
                                <p>AND</p>
                            </div>
                            <div key={uuidv4()} className="condition-value condition--values">
                                <p>{activeValues[1]}</p>
                            </div>
                        </>
                    ) : activeOperator === "IN" ? (
                        <>
                            <div className="condition-in-value d-flex">
                                <p>(</p>
                                {activeValues.map((value, index) => {
                                    return (
                                        <>
                                            <div className="condition-value condition--values">
                                                <p>{index === activeValues.length - 1 ? value : `${value},`}</p>
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

                            const popupId = useMemo(() => uuidv4(), []);

                            return (
                                <>
                                    <div key={popupId} className="condition-value condition--values"
                                        onClick={() => togglePopup(popupId)}
                                    >
                                        <p >{value}</p>
                                        <div className={`condition-change-value-popup d-flex ${popupId === selectedPopupId ? "active" : ""}`} onClick={preventButtonClick}>
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