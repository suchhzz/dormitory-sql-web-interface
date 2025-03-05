import { Query } from './abstractions/Query'
import { Condition } from './abstractions/Condition'

interface QueryBuilder {
    query: Query,

    addSelectCondition(operator: string, column: string, values: string[]): void,
    updateSelectConditionValue(conditionIndex: number, values: string[]): void,
    updateSelectConditionColumn(conditionIndex: number, column: string): void,
    setSelectingColumns(columns: string[]): void,
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

    setSelectingColumns(columns: string[]): void {
        this.query.setColumns(columns);
    }

    executeSelect() {
        let querySelect: string = this.query.getQuerySelect();
        console.log(querySelect);
    }
}

export const queryBuilder = new QueryBuilder();