import { useEffect, useState } from "react";

export default function UserCondition({ column, values, operator }: { column?: string; values?: string[]; operator?: string }) {

    const [activeColumn, setActiveColumn] = useState<string>(column ?? "column");
    const [activeValues, setActiveValues] = useState<string[]>(values ?? ["value"]);
    const [activeOperator, setActiveOperator] = useState<string>(operator ?? "");

    const [typeInConditionModalActive, setTypeInConditionModalActive] = useState<boolean>(false);
    const [typeInConditionInputValue, setTypeInConditionInputValue] = useState<string>("");

    const toggleInConditionModal = () => {
        setTypeInConditionModalActive(!typeInConditionModalActive);
    }

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
                    </div>
                    <div className="condition-value condition--operator">
                        <p>{activeOperator}</p>
                    </div>
                    {activeOperator === "BETWEEN" ? (
                        <>
                            <div className="condition-value condition--values">
                                <p>{activeValues[0]}</p>
                            </div>
                            <div className="condition-value condition--values">
                                <p>AND</p>
                            </div>
                            <div className="condition-value condition--values">
                                <p>{activeValues[1]}</p>
                            </div>
                        </>
                    ) : activeOperator === "IN" ? (
                        <>
                            <div className="condition-in-value d-flex">
                                <p>(</p>
                                {activeValues.map((value, index) => (
                                    <>
                                        <div className="condition-value condition--values">
                                            <p>{index === activeValues.length - 1 ? value : `${value},`}</p>
                                        </div>
                                    </>
                                ))}
                                <button className="condition-in-add-value-button"
                                    onClick={toggleInConditionModal}
                                >+</button>
                                <div className={`condition-in-add-value-popup d-flex ${typeInConditionModalActive ? "active" : ""}`}>
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
                        activeValues.map((value, index) =>
                            <>
                                <div className="condition-value condition--values">
                                    <p key={index}>{value}</p>
                                </div>
                            </>
                        )
                    )}
                </div>
            </div>
        </>
    )
}