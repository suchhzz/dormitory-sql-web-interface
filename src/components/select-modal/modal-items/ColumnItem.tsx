import AliasOption from "./column-item-params/AliasOption"
import FunctionOption from "./column-item-params/FunctionOption"

export default function ColumnItem( 
    {
        columnName
    }: 
    {
        columnName: string
    }
 ) {
    return (
        <>
            <div className="column-item">
                <div className="column-options-wrapper d-flex">
                    <FunctionOption />
                    <AliasOption />
                </div>
                <p>{columnName}</p>
            </div>
        </>
    )
}