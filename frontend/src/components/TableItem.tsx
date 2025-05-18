import { useEffect, useState } from "react";
import { getTableItemById } from "../scripts/query/queryService";
import { translateOneColumn } from "../services/translateColumns";
import { ForeignKey } from "../types/foreignKey";
import { formatForeignCell, formatForeignTableObject, formatTableData } from "../services/foreignTableService";

export default function TableItem({
  index,
  valueIndex,
  valueItem,
  tableColumns,
  foreignKeys,
  activeForeignCellIndex,
  activeTableName,
  isForeignKey,
  setActiveForeignCellIndex,
}: {
  index: string;
  valueIndex: number;
  valueItem: string;
  tableColumns: string[];
  foreignKeys: ForeignKey[];
  activeForeignCellIndex: string;
  activeTableName: string;
  setActiveForeignCellIndex: React.Dispatch<React.SetStateAction<string>>;
  isForeignKey: (columnName: string) => boolean;
}) {
  const [foreignKeyItemData, setForeignKeyItemData] = useState<object | null>(null);
  const [foreignKeyFields, setForeignKeyFields] = useState<string[]>([]);
  const [foreignTableName, setForeignTableName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setForeignKeyItemData(null);
    setForeignKeyFields([]);
    setForeignTableName("");
  }, [activeTableName]);

  const foreignKeyCellClick = (table: string, value: string) => {
    if (!foreignKeyItemData) {
      const foreignTable = foreignKeys.find((el) => el.from === table);

      if (foreignTable) {
        setForeignTableName(foreignTable.table);
        fetchTableItemById(foreignTable.table, Number(value));
      }
    }
    setActiveForeignCellIndex(index);
  };

  const fetchTableItemById = async (tableName: string, foreignKeyId: number) => {
    setLoading(true);
    try {
      const selectedTableItem = await getTableItemById(tableName, foreignKeyId);
      const { id, ...copiedWithoutId } = selectedTableItem;
      const keys = Object.keys(copiedWithoutId);
      const formattedData = await formatForeignTableObject(copiedWithoutId, keys);
      setForeignKeyItemData(formattedData);
      setForeignKeyFields(keys);
    } catch (error) {
      console.error("Error fetching foreign table item:", error);
    } finally {
      setLoading(false);
    }
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
          className={`foreign-key-info-popup ${activeForeignCellIndex === index ? "active" : ""
            }`}
        >
          {loading ? (
            <div className="loading-spinner">Загрузка...</div>
          ) : (
            <div className="foreign-key-info-popup--wrapper">
              {foreignKeyFields.map((key, index) => (
                <div key={index}>
                  <strong>{translateOneColumn(foreignTableName, key)}:</strong>{" "}
                  {(foreignKeyItemData as Record<string, any>)[key]}
                </div>
              ))}
            </div>
          )}
        </div>
      </td>
    </>
  );
}
