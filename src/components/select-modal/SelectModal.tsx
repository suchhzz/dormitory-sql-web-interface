import ColumnItem from "./modal-items/ColumnItem";
import SelectModalBody from "./SelectModalBody";
import { queryBuilder } from "../../scripts/query/queryBuilder";
import { useEffect, useState } from "react";

export default function SelectModal(
    {
        isActive,
        handlerCloseModal,
        tableColumnItems,
        tableName
    }:
        {
            isActive: boolean,
            handlerCloseModal: () => void;
            tableColumnItems: string[],
            tableName: string
        }) {

    const [activeColumns, setActiveColumns] = useState<number[]>([0]);

    const executeQuery = () => {
        queryBuilder.executeSelect();
    }

    const checkActiveColumn = (index: number): boolean => {
        return activeColumns.some(el => el === index);
    }

    const toggleActiveColumn = (index: number): void => {
        if (activeColumns.some(el => el === index)) {
            setActiveColumns(prev => prev.filter(el => el !== index));
        }
        else {
            setActiveColumns(prev => [...prev, index]);
        }
    }

    return (
        <>
            <div id="selectModal" className={`modal ${isActive ? "active" : ""}`}>
                <div className="relative-container">
                    <div className='modal-container'>
                        <div className="modal-wrapper d-grid">
                            <button id='closeModal' className="close-button close-button-modal" onClick={handlerCloseModal} >X</button>
                            <div className="modal-header">
                                <p className="modal-title">Select</p>
                                <div className="table-columns-selector">
                                    <div className="columns-wrapper d-flex">
                                        <ColumnItem 
                                            columnName="All"
                                            columnIndex={0}
                                            checkActiveColumn={checkActiveColumn}
                                            toggleActiveColumn={toggleActiveColumn}
                                        />
                                        {tableColumnItems.map((item, index) => (
                                            <ColumnItem 
                                                key={index}  
                                                columnName={item}
                                                columnIndex={index + 1}
                                                checkActiveColumn={checkActiveColumn}
                                                toggleActiveColumn={toggleActiveColumn}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <SelectModalBody
                                    tableColumnItems={tableColumnItems}
                                    tableName={tableName}
                                />
                            </div>
                            <div className="modal-footer">
                                <div className="modal-footer-wrapper d-flex">
                                    <button className="template-button template-button--green" onClick={executeQuery}>Execute</button>
                                </div>
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