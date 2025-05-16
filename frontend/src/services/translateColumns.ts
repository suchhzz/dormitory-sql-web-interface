import {
  columnTranslationsConfig,
  tableNameTranslations,
} from "./translations";

export function translateColumns(
  tableName: string,
  columns: string[]
): string[] {
  const map = columnTranslationsConfig[tableName] || {};
  return columns.map((col) => map[col] || col);
}

export function translateOneColumn(tableName: string, column: string) {
  const map = columnTranslationsConfig[tableName] || {};
  return map[column];
}

export function translateTableName(tableName: string): string {
  return tableNameTranslations[tableName] || tableName;
}
