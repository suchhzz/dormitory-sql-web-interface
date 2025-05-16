import { translateTableName } from "../services/translateColumns";

export default function TableListSelect({
  tableNames,
  setSelectedTableName,
}: {
  tableNames: string[];
  setSelectedTableName: (tableName: string) => void;
}) {
  return (
    <>
      <div className="table-list">
        <select
          className="styled-select"
          onChange={(e) => setSelectedTableName(e.target.value)}
        >
          <option value="" disabled>
            Select table
          </option>
          {tableNames.map((table, index) => (
            <option key={index} value={table}>
              {translateTableName(table)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
