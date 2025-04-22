import { useEffect, useState } from "react";
import { queryBuilder } from "../../scripts/query/queryBuilder";
import InsertInput from "./InsertInput";

export default function InsertModalBody({ tableColumnItems, editValues, clearEditValue }: {
    tableColumnItems: string[],
    editValues: string[],
    clearEditValue: () => void,
}) {

    const [inputValues, setInputValues] = useState<string[]>([]);

    useEffect(() => {
        if (editValues && editValues.length > 0) {
            setInputValues(editValues);
        } else {
            setInputValues(tableColumnItems.map(() => ''));
        }
    }, [editValues, tableColumnItems]);

    const setInputValue = (inputIndex: number, value: string) => {
        setInputValues(prev => {
            const updated = [...prev];
            updated[inputIndex] = value;
            return updated;
        });
    }

    const executeInsert = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        queryBuilder.executeInsert(inputValues);
    }

    const executeUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        queryBuilder.executeUpdate(inputValues);
        clearEditValue();
    }

    useEffect(() => {
        console.log('insert modal body edit values', editValues)
    }, [editValues]);

    return (
        <>
            <div className="modal-body">
                <form className="modal-form d-flex">
                    {tableColumnItems.map((item, index) => (
                        <InsertInput
                            columnName={item}
                            inputIndex={index}
                            setInputValue={setInputValue}
                            inputValue={inputValues[index]}
                        />
                    ))}
                    {
                        editValues.length > 0 ? <button className="form-btn-submit" onClick={executeUpdate}>Update</button>
                        : <button className="form-btn-submit" onClick={executeInsert}>Insert</button>
                    }
                    
                </form>
            </div>
        </>
    )
}