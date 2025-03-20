import { useEffect, useMemo } from "react"
import { queryBuilder } from "../../../scripts/query/queryBuilder"

export default function UserCustomCondition(
    { 
        conditionContent,
        conditionId
    } : { 
        conditionContent: string,
        conditionId: number
    }) {

    useEffect(() => {
        queryBuilder.setCustomCondition(conditionContent);
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