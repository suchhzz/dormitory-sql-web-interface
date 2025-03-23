import { useEffect, useMemo, useRef } from "react"
import { queryBuilder } from "../../../scripts/query/queryBuilder"

export default function UserCustomCondition(
    {
        conditionContent,
        conditionId
    }: {
        conditionContent: string,
        conditionId: number
    }) {

    const setCustomConditionMounted = useRef(false);

    useEffect(() => {
        if (!setCustomConditionMounted.current) {
            queryBuilder.setCustomCondition(conditionContent);
            setCustomConditionMounted.current = true;
        }
    }, []);

    return (
        <>
            <div className="user-condition-item">
                <div className="user-condition-item--wrapper d-flex">
                    <div className="condition-value condition--operator">
                        <p style={{ whiteSpace: "pre-line" }}>
                            {conditionContent}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}