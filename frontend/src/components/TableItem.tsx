import { useEffect, useState } from "react";
import { getTableItemById } from "../scripts/query/queryService";
import { ForeignKey } from "../types/foreignKey";

export default function TableItem({
  valueIndex,
  valueItem,
  tableColumns,
  foreignKeys,
  isForeignKey,
}: {
  valueIndex: number;
  valueItem: string;
  tableColumns: string[];
  foreignKeys: ForeignKey[];
  isForeignKey: (columnName: string) => boolean;
}) {
  const [foreignKeyItemData, setForeignKeyItemData] = useState<object>({});
  const [foreignKeyFields, setForeignKeyFields] = useState<string[]>([]);

  useEffect(() => {
    const keys = Object.keys(foreignKeyItemData);
    setForeignKeyFields(keys);
  }, [foreignKeyItemData]);

  const foreignKeyCellClick = (table: string, value: string) => {
    const foreignTable = foreignKeys.find((el) => el.from === table);

    if (foreignTable) {
      fetchTableItemById(foreignTable.table, Number(value));
    }
  };

  const fetchTableItemById = async (tableName: string, id: number) => {
    const selectedTableItem = await getTableItemById(tableName, id);
    setForeignKeyItemData(selectedTableItem);
    console.log("fetched item", selectedTableItem);
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

        <div className="foreign-key-info-popup">
          <div className="foreign-key-info-popup--wrapper">
            {foreignKeyFields.map((key, index) => (
              <div key={index}>
                <strong>{key}:</strong>{" "}
                {(foreignKeyItemData as Record<string, any>)[key]}
              </div>
            ))}
          </div>
        </div>
      </td>
    </>
  );
}
