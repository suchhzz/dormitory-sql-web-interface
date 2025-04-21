export default function InsertInput({
    columnName,
    inputIndex,
    setInputValue
}: {
    columnName: string,
    inputIndex: number,
    setInputValue: (inputIndex: number, value: string) => void
}) {
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(inputIndex, e.target.value);
    }

    return (


        <>
            <label className="label-form d-flex">
                {columnName}
                <input type="text" className="form-item-input" onChange={handleOnChange}></input>
            </label>
        </>
    )
}