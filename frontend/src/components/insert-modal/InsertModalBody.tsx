import { useEffect, useState } from "react";
import { queryBuilder } from "../../scripts/query/queryBuilder";
import InsertInput from "./InsertInput";
import { ForeignKey } from "../../types/foreignKey";

export default function InsertModalBody({
  tableColumnItems,
  editValues,
  tableName,
  clearEditValue,
  primaryKeys,
  foreignKeys,
  executeUpdate,
  executeInsert,
}: {
  tableColumnItems: string[];
  editValues: string[];
  tableName: string;
  clearEditValue: () => void;
  primaryKeys: number[];
  foreignKeys: ForeignKey[];
  executeUpdate: (inputValues: string[]) => void;
  executeInsert: (inputValues: string[]) => void;
}) {
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    if (editValues && editValues.length > 0) {
      setInputValues(editValues);
    } else {
      setInputValues(tableColumnItems.map(() => ""));
    }
  }, [editValues, tableColumnItems]);

  useEffect(() => {
    console.log("edit values", editValues);
  }, [editValues]);

  const setInputValue = (inputIndex: number, value: string) => {
    setInputValues((prev) => {
      const updated = [...prev];
      updated[inputIndex] = value;
      return updated;
    });
  };

  const executeInsertHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    executeInsert(inputValues);
  };

  const executeUpdateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    executeUpdate(inputValues);
    clearEditValue();
  };

  const isForeignKey = (columnName: string) => {
    return foreignKeys.some((fk) => fk.from === columnName);
  };

  useEffect(() => {
    console.log("insert modal body edit values", editValues);
  }, [editValues]);

  return (
    <>
      <div className="modal-body">
        <form className="modal-form d-flex">
          {tableColumnItems.map((item, index) => (
            <InsertInput
              columnName={item}
              inputIndex={index}
              tableName={tableName}
              setInputValue={setInputValue}
              inputValue={inputValues[index]}
              isPrimaryKey={primaryKeys[index] === 1}
              isForeignKey={isForeignKey(item)}
            />
          ))}
          {editValues.length > 0 ? (
            <button className="form-btn-submit" onClick={executeUpdateHandler}>
              Update
            </button>
          ) : (
            <button className="form-btn-submit" onClick={executeInsertHandler}>
              Insert
            </button>
          )}
        </form>
      </div>
    </>
  );
}
