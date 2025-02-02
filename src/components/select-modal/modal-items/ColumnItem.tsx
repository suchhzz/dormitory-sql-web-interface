import AliasOption from "./column-item-params/AliasOption"
import FunctionOption from "./column-item-params/FunctionOption"

export default function ColumnItem() {
    return (
        <>
            <div className="column-item selected">
                <div className="column-options-wrapper d-flex">
                    <FunctionOption />
                    <AliasOption />
                </div>
                <p>column</p>
            </div>
        </>
    )
}