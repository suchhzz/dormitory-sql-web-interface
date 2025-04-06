import { useEffect, useRef, useState } from "react"
import { queryBuilder } from "../../../scripts/query/queryBuilder"
import { staticWords } from "../../../scripts/custom-tab/queryFilters";

export default function UserCustomCondition(
    {
        conditionContent,
        conditionId
    }: {
        conditionContent: string,
        conditionId: number
    }) {

    const [safeConditionContent, setSafeConditionContent] = useState<string>('');
    const setCustomConditionMounted = useRef(false);

    useEffect(() => {
        if (!setCustomConditionMounted.current) {
            queryBuilder.setCustomCondition(conditionId, conditionContent);
            const hightlightedContent = hightLightSyntax(conditionContent);
            setSafeConditionContent(hightlightedContent);
            setCustomConditionMounted.current = true;
        }
    }, [setCustomConditionMounted]);

    useEffect(() => {
        const hightlightedContent = hightLightSyntax(conditionContent);
        setSafeConditionContent(hightlightedContent);
    }, [conditionContent]);

    const hightLightSyntax = (text: string): string => {
        const wordsRegex = [...staticWords].join("|");
        const regex = new RegExp(`\\b(${wordsRegex})\\b|[><=\\-+*/%]`, "g");

        return text.replace(regex, (match) => {
            return `<span class="highlighted">${match}</span>`;
        });
    };


    return (
        <>
            <div className="user-condition-item">
                <div className="user-condition-item--wrapper d-flex">
                    <div className="condition-value condition--operator">
                        <p style={{ whiteSpace: "pre-line" }}
                            dangerouslySetInnerHTML={{ __html: safeConditionContent }} />
                    </div>
                </div>
            </div>
        </>
    )
}