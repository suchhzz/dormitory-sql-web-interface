import { Query } from './abstractions/Query'
import { Condition } from './abstractions/Condition'

interface QueryBuilder {
    query: Query,

    addSelectCondition(operator: string, column: string, values: string[]): void,
    updateSelectConditionValue(conditionIndex: number, values: string[]): void,
    updateSelectConditionColumn(conditionIndex: number, column: string): void,
    setSelectingColumns(columns: string[]): void,
    executeSelect(): void,
    toggleSelectColumn(index: number): void,

    addRelative(conditionId: number): void,
    toggleRelative(conditionId: number, isANDSelected: boolean): void,
}

class QueryBuilder {

    query: Query;

    constructor () {
        this.query = new Query();
    }

    addRelative(conditionId: number): void {
        if (conditionId === 0) {
            return;
        }
        this.query.addRelative();
    }

    toggleRelative(conditionId: number, isANDSelected: boolean): void {
        if (conditionId === 0) {
            return;
        }
        this.query.toggleRelative(conditionId, isANDSelected);
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

    executeSelect(): void {
        let querySelect: string = this.query.getQuerySelect();
        console.log(querySelect);
    }

    toggleSelectColumn(index: number): void {
        this.query.toggleSelectColumn(index);
    }
}

export const queryBuilder = new QueryBuilder();