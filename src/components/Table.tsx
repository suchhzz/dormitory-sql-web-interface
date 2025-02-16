import { useEffect, useState } from "react"
import { TableType } from "../types/databaseTypes";

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
        console.log(columnsName);
        console.log(columnsValues);
    }, [columnsValues]);

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
                        <tr key={index}>
                            {item.map((valueItem, valueIndex) => (
                                <td key={valueIndex}>{valueItem}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}