export default function UserCondition( { column, values, operator } : { column: string; values: string[]; operator: string } ) {
    return (
        <>
            <div className="user-condition-item">
                <div className="user-condition-item--wrapper d-flex">
                    <div className="condition-value condition--column">
                        <p>
                            {column}
                        </p>
                    </div>
                    <div className="condition-value condition--operator">
                        <p>{operator}</p>
                    </div>
                    <div className="condition-value condition--values">
                        {values.map((value, index) => (
                            <p key={index}>{value}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}