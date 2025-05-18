import { useEffect, useState } from "react";
import { translateOneColumn } from "../../services/translateColumns";
import { tableNamesByForeignKey } from "../../services/tableByForeignColumnConfig";
import { getTableItemsByTableName } from "../../scripts/query/queryService";
import { formatTableData } from "../../services/foreignTableService";

type ForeignTableSelectList = {
  id: number,
  tableInfo: string[],
}

export default function InsertInput({
  columnName,
  tableName,
  inputIndex,
  setInputValue,
  inputValue,
  isPrimaryKey,
  isForeignKey,
}: {
  columnName: string;
  tableName: string;
  inputIndex: number;
  setInputValue: (inputIndex: number, value: string) => void;
  inputValue: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
}) {

  const [selectListOptions, setSelectListOptions] = useState<ForeignTableSelectList[]>([]);

  useEffect(() => {
    if (isForeignKey) {
      getForeignTableItems();
    }
  }, [tableName]);

  const getForeignTableItems = async () => {
    try {
      const foreignTableName = tableNamesByForeignKey[columnName];

      const tableItems = await getTableItemsByTableName(foreignTableName.tableName);

      console.log('FOREIGN ITEMS', tableItems);

      const formattedTableItems = tableItems.map((item: any) => ({
        id: item.id,
        tableInfo: formatTableData(foreignTableName.tableName, item),
      }));

      setSelectListOptions(formattedTableItems);
    } catch (e) {
      console.error('fetching foreign table items error', e);
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(inputIndex, e.target.value);
  };

  return (
    <>
      {!isPrimaryKey && (
        <label className="label-form d-flex">
          {translateOneColumn(tableName, columnName)}
          {isForeignKey ?

            <div className="insert-list">
              <select
                className="styled-select"
                onChange={(e) => () => { setInputValue(inputIndex, e.target.value) }}
              >
                <option value="" disabled>
                  Select table
                </option>
                {selectListOptions.map((optionItem, index) => (
                  <option key={index} value={optionItem.id}>
                    {optionItem.tableInfo}
                  </option>
                ))}
                {/* {tableNames.map((table, index) => (
                        <option key={index} value={table}>
                          {translateTableName(table)}
                        </option>
                      ))} */}
              </select>
            </div>

            :

            <input
              type="text"
              className="form-item-input"
              value={inputValue}
              onChange={handleOnChange}
              disabled={isPrimaryKey}
            ></input>
          }
        </label>
      )}
    </>
  );
}
