export default function TalbeListSelect({ tableNames, setSelectedTableName }:
    {
        tableNames: string[],
        setSelectedTableName: (tableName: string) => void,
    }
) {

    return (
        <>
            <div className="table-list">
                <select
                    className="styled-select"
                    onChange={(e) => setSelectedTableName(e.target.value)}
                >
                    <option value="" disabled>Select table</option>
                    {tableNames.map((table, index) => (
                        <option key={index} value={table}>{table}</option>
                    ))}
                </select>
            </div>
        </>
    )
}