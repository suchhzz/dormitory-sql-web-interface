interface Condition {
    column: string;
    operator: string;
    values: string[];
}

interface ConditionGroup {
    conditions: Condition[];
    logicalOperator: "AND" | "OR";
}

class ConditionBuilder {
    private conditions : Condition[] = [];
    private conditionsLogicalRelative : string[] = [];

    addCondition(
        column : string,
        operator : string,
        values : string[],
        logicalOperator: "AND" | "OR" = "AND"
    ): void
    {
        const newCondition: Condition = { column, operator, values };

        this.conditions.push(newCondition);

        if (this.conditions.length > 1) {
            this.conditionsLogicalRelative.push(logicalOperator);
        }
    }

    getSQLRequest() : void {
        
    }
}