import { useEffect, useState } from "react"
import { TableType } from "../types/databaseTypes";
import { queryBuilder } from "../scripts/query/queryBuilder";

export default function Table({ table }: { table: TableType }) {

    const [columnsName, setColumnsName] = useState<string[]>([]);
    const [columnsValues, setColumnsValues] = useState<string[][]>([]);

    useEffect(() => {
        if (table) {
            setColumnsName(table.columns.map(column => column));
        }
    }, [table]);

    useEffect(() => {
        if (table) {
            setColumnsValues(table.values.map(values => values));
        }
    }, [table]);

    useEffect(() => {
        queryBuilder.setSelectingColumns(columnsName);
    }, [columnsValues]);

    const deleteTableItem = (id: number) => {
        queryBuilder.deleteTableItem(id);
    }

    const editTableItem = (id: number) => {
        console.log('edit', id);
    }

    return (
        <>
            <table className="table-display">
                <thead>
                    <tr>
                        {columnsName.map((item, index) => (
                            <th key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {columnsValues.map((item, index) => (
                        <tr className="table-item" key={index}>
                            {item.map((valueItem, valueIndex) => (
                                <td key={valueIndex}>{valueItem}</td>
                            ))}

                            <div className="table-row-options">
                                <div className="table-row-options--wrapper">
                                    <div className="option-item delete" onClick={() => deleteTableItem(parseInt(item[0]))}>
                                    </div>
                                    <div className="option-item edit" onClick={() => editTableItem(parseInt(item[0]))}>
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