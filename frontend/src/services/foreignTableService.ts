import { getTableItemById } from "../scripts/query/queryService";
import { foreignTableInfoConfig } from "./foreignKeyInfoConfig";
import { tableNamesByForeignKey } from "./tableByForeignColumnConfig";

type RowData = { [key: string]: any };

export const formatTableData = (tableName: string, rowData: RowData): string => {
    const tableConfig = foreignTableInfoConfig[tableName];

    if (!tableConfig) {
        return '';
    }

    const formattedValues: string[] = [];

    tableConfig.columns.forEach(col => {
        formattedValues.push(rowData[col]);
    });

    return formattedValues.join(' ');
}

export const formatForeignCell = async (columnName: string, value: string): Promise<string> => {

    const foreignTable = tableNamesByForeignKey[columnName];

    if (foreignTable) {
        const foreignTableItem = await getTableItemById(foreignTable.tableName, Number(value))
        const formattedTableItem = formatTableData(foreignTable.tableName, foreignTableItem);

        return formattedTableItem;
    }

    return value;
}

export const formatForeignTableObject = async (tableObject: RowData, keys: string[]): Promise<object> => {
    const formattedTableObject = { ...tableObject };

    const keyPromises = keys.map(async (key) => {
        const value = tableObject[key];

        if (value) {
            const formattedValue = await formatForeignCell(key, String(value));
            formattedTableObject[key] = formattedValue;
        }
    });

    await Promise.all(keyPromises);

    return formattedTableObject;
}