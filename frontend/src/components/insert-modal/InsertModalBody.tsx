import { useEffect, useState } from "react";
import { queryBuilder } from "../../scripts/query/queryBuilder";
import InsertInput from "./InsertInput";

export default function InsertModalBody({ tableColumnItems }: {
    tableColumnItems: string[]
}) {

    const [inputValues, setInputValues] = useState(() => {
        return tableColumnItems.map(() => '')
    });

    useEffect(() => {
        console.log(inputValues);
    }, []);

    const setInputValue = (inputIndex: number, value: string) => {
        inputValues[inputIndex] = value;
    }

    const executeInsert = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        queryBuilder.executeInsert(inputValues);
    }

    return (
        <>
            <div className="modal-body">
                <form className="modal-form d-flex">
                    {tableColumnItems.map((item, index) => (
                        <InsertInput
                            columnName={item}
                            inputIndex={index}
                            setInputValue={setInputValue}
                        />
                    ))}
                    <button className="form-btn-submit" onClick={executeInsert}>Insert</button>
                </form>
            </div>
        </>
    )
}