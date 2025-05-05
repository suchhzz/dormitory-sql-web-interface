import { useEffect, useState } from "react"
import { TableType } from "../types/databaseTypes";
import { queryBuilder } from "../scripts/query/queryBuilder";

export default function Table({ tableColumns, tableValues, editValue }: { tableColumns: string[], tableValues: string[][], editValue: (editObject: string[]) => void }) {

    const [columnsName, setColumnsName] = useState<string[]>([]);
    const [columnsValues, setColumnsValues] = useState<string[][]>([]);

    useEffect(() => {
        if (tableColumns) {
            setColumnsName(tableColumns);
        }
    }, [tableColumns]);

    useEffect(() => {
        if (tableValues) {
            setColumnsValues(tableValues);
        }
    }, [tableValues]);

    // useEffect(() => {
    //     queryBuilder.setSelectingColumns(columnsName);
    // }, [columnsValues]);

    const deleteTableItem = (id: number) => {
        queryBuilder.deleteTableItem(id);
    }

    const editTableItem = (editObject: string[]) => {
        console.log('edit', editObject);
        editValue(editObject);
    }

    return (
        <>
            <table className="table-display">
                <thead>
                    <tr>
                        {tableColumns.map((item, index) => (
                            <th key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableValues.map((item, index) => (
                        <tr className="table-item" key={index}>
                            {item.map((valueItem, valueIndex) => (
                                <td key={valueIndex}>{valueItem}</td>
                            ))}

                            <div className="table-row-options">
                                <div className="table-row-options--wrapper">
                                    <div className="option-item delete" onClick={() => deleteTableItem(parseInt(item[0]))}>
                                    </div>
                                    <div className="option-item edit" onClick={() => editTableItem(item)}>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}