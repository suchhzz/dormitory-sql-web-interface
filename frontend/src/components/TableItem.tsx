import { useEffect, useState } from "react";
import { getTableItemById } from "../scripts/query/queryService";
import { translateOneColumn } from "../services/translateColumns";
import { ForeignKey } from "../types/foreignKey";

export default function TableItem({
  index,
  valueIndex,
  valueItem,
  tableColumns,
  foreignKeys,
  activeForeignCellIndex,
  isForeignKey,
  setActiveForeignCellIndex,
}: {
  index: string;
  valueIndex: number;
  valueItem: string;
  tableColumns: string[];
  foreignKeys: ForeignKey[];
  activeForeignCellIndex: string;
  setActiveForeignCellIndex: React.Dispatch<React.SetStateAction<string>>;
  isForeignKey: (columnName: string) => boolean;
}) {
  const [foreignKeyItemData, setForeignKeyItemData] = useState<object>({});
  const [foreignKeyFields, setForeignKeyFields] = useState<string[]>([]);
  const [foreignTableName, setForeignTableName] = useState<string>("");

  useEffect(() => {
    const keys = Object.keys(foreignKeyItemData);
    setForeignKeyFields(keys);
  }, [foreignKeyItemData]);

  const foreignKeyCellClick = (table: string, value: string) => {
    const foreignTable = foreignKeys.find((el) => el.from === table);

    if (foreignTable) {
      setForeignTableName(foreignTable.table);
      fetchTableItemById(foreignTable.table, Number(value));
    }
  };

  const fetchTableItemById = async (tableName: string, id: number) => {
    const selectedTableItem = await getTableItemById(tableName, id);
    setForeignKeyItemData(selectedTableItem);
    setActiveForeignCellIndex(index);

    console.log("active foreign cell index", activeForeignCellIndex);
    console.log("current cell index", index);
  };

  return (
    <>
      <td
        key={valueIndex}
        className={isForeignKey(tableColumns[valueIndex]) ? "foreign-key" : ""}
        onClick={() => {
          foreignKeyCellClick(tableColumns[valueIndex], valueItem);
        }}
      >
        {valueItem}

        <div
          className={`foreign-key-info-popup ${
            activeForeignCellIndex === index ? "active" : ""
          }`}
        >
          <div className="foreign-key-info-popup--wrapper">
            {foreignKeyFields.map((key, index) => (
              <div key={index}>
                <strong>{translateOneColumn(foreignTableName, key)}:</strong>{" "}
                {(foreignKeyItemData as Record<string, any>)[key]}
              </div>
            ))}
          </div>
        </div>
      </td>
    </>
  );
}
