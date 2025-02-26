import { useEffect, useMemo, useState } from "react";
import { queryBuilder } from "../../../scripts/query/queryBuilder";

export default function UserCondition(
    {
        column,
        values,
        operator,
        handlerUpdateUserCondition,
        conditionId,
        tableColumnItems
    }: {
        column?: string;
        values?: string[];
        operator?: string,
        handlerUpdateUserCondition: (id: number) => void,
        conditionId: number,
        tableColumnItems: string[]
    }) {

    const [activeColumn, setActiveColumn] = useState<string>(column ?? "column");
    const [activeValues, setActiveValues] = useState<string[]>(values ?? ["_"]);
    const [activeOperator, setActiveOperator] = useState<string>(operator ?? "");
    const [typeInConditionModalActive, setTypeInConditionModalActive] = useState<boolean>(false);
    const [typeInConditionInputValue, setTypeInConditionInputValue] = useState<string>("");
    const [selectedPopupId, setSelectedPopupId] = useState<number>(-1);
    const [isColumnChangePopupActive, setIsColumnChangePopupActive] = useState<boolean>(false);
    const [isFilteredItemsActive, setIsFilteredItemsActive] = useState<boolean>(false);
    const [columnInputValue, setColumnInputValue] = useState<string>("");
    const [tableColumns, setTableColumns] = useState<string[]>([]);
    const [filteredTableColumns, setFilteredTableColumns] = useState<string[]>([]);
    const [activeValueInput, setActiveValueInput] = useState<string>("");

    useEffect(() => {
        setTableColumns(tableColumnItems.map(item => item));
        setFilteredTableColumns(tableColumnItems.map(item => item));
    }, []);

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


    const hideChangeValuePopups = () => {
        setIsColumnChangePopupActive(false);
        setIsFilteredItemsActive(false);
        setTypeInConditionModalActive(false);
        setSelectedPopupId(-1);
        filterColumnItems("");
        setActiveValueInput("");
        setTypeInConditionInputValue("");
    }

    const togglePopup = (id: number) => {
        hideChangeValuePopups();
        let currentid;

        id === selectedPopupId ? currentid = -1 : currentid = id;

        setSelectedPopupId(currentid);
    }

    const preventButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }


    const toggleInConditionModal = () => {
        hideChangeValuePopups();
        setTypeInConditionModalActive(!typeInConditionModalActive);
    }

    const handleActiveColumnAddButton = () => {
        setActiveColumn(columnInputValue);
        setColumnInputValue("");
        hideChangeValuePopups();

    }

    useEffect(() => {
        queryBuilder.updateSelectConditionColumn(conditionId, activeColumn);
    }, [activeColumn]);

    const handleActiveValueInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveValueInput(event.target.value);
    }

    const handleActiveValueAddButton = (index: number) => {

        setActiveValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = activeValueInput;
            return updatedValues;
        });

        hideChangeValuePopups();
        handlerUpdateUserCondition(conditionId);
    };

    useEffect(() => {
        queryBuilder.updateSelectConditionValue(conditionId, activeValues);
    }, [activeValues]);

    const handleTypeInConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeInConditionInputValue(event.target.value);
    }

    const handleTypeInConditionAddButton = () => {
        setValuesInOperator(typeInConditionInputValue);
        setTypeInConditionInputValue("");
        toggleInConditionModal();
    }

    const setValuesBetweenOperator = () => {
        setActiveValues(["_", "_"]);
    }

    const setValuesInOperator = (inConditionValue: string) => {
        setActiveValues(prevValues => [...activeValues, inConditionValue]);
    }

    const toggleColumnChangePopup = () => {
        hideChangeValuePopups();
        setIsColumnChangePopupActive(!isColumnChangePopupActive);

        if (!isColumnChangePopupActive) {
            setIsFilteredItemsActive(false);
        }
    }

    const filterColumnItems = (wordFilter: string) => {
        const filtered = tableColumns.filter(column =>
            column.toLowerCase().includes(wordFilter.toLowerCase())
        );

        setFilteredTableColumns(filtered);
    }

    const handlerColumnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColumnInputValue(event.target.value);
        filterColumnItems(event.target.value);
    }

    const filterItemClickHandler = (filterValue: string) => {
        setColumnInputValue(filterValue);
        filterColumnItems(filterValue);
    }

    const handlerColumnInputFocus = () => {
        setIsFilteredItemsActive(true);
    };

    return (
        <>
            <div className="user-condition-item">
                <div className="user-condition-item--wrapper d-flex">
                    <div className="condition-value condition--column">
                        <p
                            onClick={toggleColumnChangePopup}
                        >
                            {activeColumn}
                        </p>
                        <div className={`condition-change-value-popup d-flex ${isColumnChangePopupActive ? "active" : ""}`} onClick={preventButtonClick}>
                            <input type="text" placeholder="value"
                                value={columnInputValue}
                                onChange={handlerColumnInputChange}
                                onFocus={handlerColumnInputFocus}
                            />
                            <div className={`filtered-input-columns d-grid  ${isFilteredItemsActive ? "active" : ""}`}>
                                {filteredTableColumns.map((item, index) => (
                                    <p key={index} className="filter-item"
                                        onClick={() => filterItemClickHandler(item)}
                                    >{item}</p>
                                ))}
                            </div>
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
                            <div className="condition-value condition--operator">
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