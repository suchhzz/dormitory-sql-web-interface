import { translateOneColumn } from "../services/translateColumns";

export default function TableSearch({
  columns = [],
  searchQuery = "",
  selectedColumn = "",
  tableName,
  onSearchChange,
  onColumnChange,
}: {
  columns: string[];
  searchQuery: string;
  selectedColumn?: string;
  tableName: string;
  onSearchChange?: (value: string) => void;
  onColumnChange?: (value: string) => void;
}) {
  return (
    <div className="table-search">
      <label htmlFor="column-select">Пошук по:</label>
      <select
        id="column-select"
        className="styled-select"
        value={selectedColumn}
        onChange={(e) => onColumnChange?.(e.target.value)}
      >
        <option value="" disabled>
          Select column
        </option>
        {columns.map((col) => (
          <option key={col} value={col}>
            {translateOneColumn(tableName, col)}
          </option>
        ))}
      </select>

      <input
        type="text"
        className="search-input"
        placeholder="Введіть запит..."
        value={searchQuery}
        onChange={(e) => onSearchChange?.(e.target.value)}
      />
    </div>
  );
}
