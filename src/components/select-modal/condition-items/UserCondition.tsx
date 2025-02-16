import { useEffect, useMemo, useState } from "react";

export default function UserCondition({ column, values, operator, handlerUpdateUserCondition, conditionId }: { column?: string; values?: string[]; operator?: string, handlerUpdateUserCondition: (id: number) => void, conditionId: number }) {

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

        handlerUpdateUserCondition(conditionId);
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


    const [isColumnChangePopupActive, setIsColumnChangePopupActive] = useState<boolean>(false);
    const [isFilteredItemsActive, setIsFilteredItemActive] = useState<boolean>(false);

    const toggleColumnChangePopup = () => {
        setIsColumnChangePopupActive(!isColumnChangePopupActive);
    }


    const [columnInputValue, setColumnInputValue] = useState<string>("");
    const [tableColumns, setTableColumns] = useState<string[]>([]);
    const [filteredTableColumns, setFilteredTableColumns] = useState<string[]>([]);
    const items = ['column1', 'column2', '123', 'coludsadfas', 'fdsaf2w22432'];

    useEffect(() => {
        setTableColumns(items.map(item => item));
        setFilteredTableColumns(items.map(item => item));
    }, [])

    useEffect(() => {
        console.log(filteredTableColumns);
    }, [filteredTableColumns]);

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

    const handleColumnInputFocus = () => {
        setIsFilteredItemActive(true);
      };
    
      const handleColumnInputBlur = () => {
        setIsFilteredItemActive(false);
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
                                onFocus={handleColumnInputFocus}
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