import { getTableItemById } from "../scripts/query/queryService";
import { foreignTableInfoConfig } from "./foreignKeyInfoConfig";
import { tableNamesByForeignKey } from "./tableByForeignColumnConfig";

type RowData = { [key: string]: any };

export const formatTableData = (
  tableName: string,
  rowData: RowData
): string => {
  const tableConfig = foreignTableInfoConfig[tableName];

  if (!tableConfig) {
    return "";
  }

  console.log("table config", tableConfig);

  const formattedValues: string[] = [];

  tableConfig.columns.forEach((col) => {
    formattedValues.push(rowData[col]);
  });

  return formattedValues.join(" ");
};

const formatAccommodationTableData = async (value: string): Promise<string> => {
  const accommodationValues = value.split(" ");

  const residentTableItem = await getTableItemById(
    "resident",
    Number(accommodationValues[0])
  );
  const roomTableItem = await getTableItemById(
    "room",
    Number(accommodationValues[1])
  );

  const formattedResident = formatTableData("resident", residentTableItem);
  const formattedRoom = formatTableData("room", roomTableItem);

  return `${formattedResident} ${formattedRoom}`;
};

export const formatForeignCell = async (
  columnName: string,
  value: string
): Promise<string> => {
  const foreignTable = tableNamesByForeignKey[columnName];

  if (foreignTable) {
    const foreignTableItem = await getTableItemById(
      foreignTable.tableName,
      Number(value)
    );
    const formattedTableItem = formatTableData(
      foreignTable.tableName,
      foreignTableItem
    );

    if (foreignTable.tableName === "accommodation") {
      return formatAccommodationTableData(formattedTableItem);
    }

    return formattedTableItem;
  }

  return value;
};

export const formatForeignTableObject = async (
  tableObject: RowData,
  keys: string[]
): Promise<object> => {
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
};
