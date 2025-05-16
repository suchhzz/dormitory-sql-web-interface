import { useEffect, useState } from "react";
import { TableType } from "../types/databaseTypes";
import { queryBuilder } from "../scripts/query/queryBuilder";
import {
  translateColumns,
  translateOneColumn,
} from "../services/translateColumns";
import { ForeignKey } from "../types/foreignKey";
import TableItem from "./TableItem";

export default function Table({
  tableColumns,
  tableValues,
  tableName,
  foreignKeys,
  editValue,
  executeDelete,
}: {
  tableColumns: string[];
  tableValues: string[][];
  tableName: string;
  foreignKeys: ForeignKey[];
  editValue: (editObject: string[]) => void;
  executeDelete: (id: number) => void;
}) {
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

  const isForeignKey = (columnName: string) => {
    return foreignKeys.some((fk) => fk.from === columnName);
  };

  const editTableItem = (editObject: string[]) => {
    console.log("edit", editObject);
    editValue(editObject);
  };

  return (
    <>
      <table className="table-display">
        <thead>
          <tr>
            {tableColumns.map((item, index) => (
              <th key={index}>{translateOneColumn(tableName, item)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableValues.map((item: string[], index: number) => (
            <tr className="table-item" key={index}>
              {item.map((valueItem: string, valueIndex: number) => (
                <TableItem
                  valueIndex={valueIndex}
                  valueItem={valueItem}
                  tableColumns={tableColumns}
                  foreignKeys={foreignKeys}
                  isForeignKey={isForeignKey}
                />
              ))}

              <div className="table-row-options">
                <div className="table-row-options--wrapper">
                  <div
                    className="option-item delete"
                    onClick={() => executeDelete(parseInt(item[0]))}
                  ></div>
                  <div
                    className="option-item edit"
                    onClick={() => editTableItem(item)}
                  ></div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
