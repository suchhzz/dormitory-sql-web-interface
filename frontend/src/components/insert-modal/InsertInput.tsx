import { useEffect } from "react";

export default function InsertInput({
    columnName,
    inputIndex,
    setInputValue,
    inputValue,
    isPrimaryKey
}: {
    columnName: string,
    inputIndex: number,
    setInputValue: (inputIndex: number, value: string) => void,
    inputValue: string,
    isPrimaryKey: boolean
}) {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(inputIndex, e.target.value);
    }

    return (
        <>
            {!isPrimaryKey && <label className="label-form d-flex">
                {columnName}
                <input
                    type="text"
                    className="form-item-input"
                    value={inputValue}
                    onChange={handleOnChange}
                    disabled={isPrimaryKey}
                ></input>
            </label>
            }
        </>
    )
}