import AliasOption from "./column-item-params/AliasOption"
import FunctionOption from "./column-item-params/FunctionOption"
import { queryBuilder } from "../../../scripts/query/queryBuilder";
import { useEffect } from "react";

export default function ColumnItem( 
    {
        columnName,
        columnIndex,
        checkActiveColumn,
        toggleActiveColumn,
    }: 
    {
        columnName: string,
        columnIndex: number,
        checkActiveColumn: (index: number) => boolean,
        toggleActiveColumn: (index: number) => void,
    }
 ) {

    const selectColumn = () => {
        toggleActiveColumn(columnIndex);
        queryBuilder.toggleSelectColumn(columnIndex);
    }

    return (
        <>
            <div className={`column-item ${checkActiveColumn(columnIndex) ? "selected" : ""}`} onClick={selectColumn}>
                <div className="column-options-wrapper d-flex">
                    {/* <FunctionOption />
                    <AliasOption /> */}
                </div>
                <p>{columnName}</p>
            </div>
        </>
    )
}