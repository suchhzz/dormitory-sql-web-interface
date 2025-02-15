import { useEffect, useState } from "react"

export default function Table( { table } : { table: object } ) {

    const [columnsName, setColumnsName] = useState<object[] | null>(null);
    const [columnsValues, setColumnsValues] = useState<string[] | null>(null);

    useEffect(() => {
        console.log(table);
    }, []);

    return (
        <>
        <table className="table-display">
            <thead>
                <tr>
                    <th>123</th>
                    <th>123</th>
                    <th>123</th>
                    <th>123</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}