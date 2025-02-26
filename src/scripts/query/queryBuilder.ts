import { Query } from './abstractions/query'
import { Condition } from './abstractions/condition'

interface QueryBuilder {
    query: Query,

    addSelectCondition(operator: string, column: string, values: string[]): void,
    updateSelectConditionValue(conditionIndex: number, values: string[]): void,
    updateSelectConditionColumn(conditionIndex: number, column: string): void,
    executeSelect(): void,
}

class QueryBuilder {

    query: Query;

    constructor () {
        this.query = new Query();
    }

    addSelectCondition(operator: string, column: string, values: string[]): void {
        let condition = new Condition(operator, column, values);
        this.query.addCondition(condition);
    }

    updateSelectConditionValue(conditionIndex: number, values: string[]): void {
        this.query.updateConditionValue(conditionIndex, values);
    }

    updateSelectConditionColumn(conditionIndex: number, column: string): void {
        this.query.updateConditionColumn(conditionIndex, column);
    }

    executeSelect() {
        let querySelect: string = this.query.getQuerySelect();
        console.log(querySelect);
    }
}

export const queryBuilder = new QueryBuilder();