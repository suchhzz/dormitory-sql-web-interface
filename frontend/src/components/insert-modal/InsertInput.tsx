import { useEffect } from "react";
import { translateOneColumn } from "../../services/translateColumns";

export default function InsertInput({
  columnName,
  tableName,
  inputIndex,
  setInputValue,
  inputValue,
  isPrimaryKey,
}: {
  columnName: string;
  tableName: string;
  inputIndex: number;
  setInputValue: (inputIndex: number, value: string) => void;
  inputValue: string;
  isPrimaryKey: boolean;
}) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(inputIndex, e.target.value);
  };

  return (
    <>
      {!isPrimaryKey && (
        <label className="label-form d-flex">
          {translateOneColumn(tableName, columnName)}
          <input
            type="text"
            className="form-item-input"
            value={inputValue}
            onChange={handleOnChange}
            disabled={isPrimaryKey}
          ></input>
        </label>
      )}
    </>
  );
}
