import { useEffect, useRef, useState } from "react"
import { queryBuilder } from "../../../scripts/query/queryBuilder";

export default function ConditionRelative( 
    {
        conditionId,
    }: 
    {
        conditionId: number
    } ) {

    const [isANDRelativeSelected, setIsANDRelativeSelected] = useState<boolean>(true);
    const effectExecuted = useRef(false);

    useEffect(() => {
        if (!effectExecuted.current) { 

            console.log('adding relative conditionId:', conditionId)

            queryBuilder.addRelative(conditionId);
            effectExecuted.current = true;
        }
    }, []);

    useEffect(() => {
        queryBuilder.toggleRelative(conditionId, isANDRelativeSelected);
    }, [isANDRelativeSelected])

    const toggleRelative = () => {
        setIsANDRelativeSelected(!isANDRelativeSelected);
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