import { useEffect } from "react";

export default function InsertInput({
    columnName,
    inputIndex,
    setInputValue,
    inputValue
}: {
    columnName: string,
    inputIndex: number,
    setInputValue: (inputIndex: number, value: string) => void,
    inputValue: string
}) {
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(inputIndex, e.target.value);
    }

    return (
        <>
            <label className="label-form d-flex">
                {columnName}
                <input type="text" className="form-item-input" value={inputValue} onChange={handleOnChange}></input>
            </label>
        </>
    )
}