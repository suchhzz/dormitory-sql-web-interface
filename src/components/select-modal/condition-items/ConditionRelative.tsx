import { useState } from "react"

export default function ConditionRelative( 
    {
        conditionId,
    }: 
    {
        conditionId: number
    } ) {

    const [isANDRelativeSelected, setIsANDRelativeSelected] = useState<boolean>(true);

    const toggleRelative = () => {
        setIsANDRelativeSelected(!isANDRelativeSelected);

        console.log(`relative between ${conditionId} and ${conditionId - 1}: ${isANDRelativeSelected ? "AND" : "OR"}`)
        console.log(isANDRelativeSelected)
    }

    return (
        <>
            <div className="relative" onClick={toggleRelative}>
                <div className="relative--container">
                    <p className="text">
                        {isANDRelativeSelected ? "AND" : "OR"}
                    </p>
                </div>
            </div>
        </>
    )

}