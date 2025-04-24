import { Query } from './abstractions/query';
import { Condition } from './abstractions/condition';
import { VoidFunctionComponent } from 'react';

interface QueryBuilder {
    query: Query,

    addSelectCondition(conditionId: number, operator: string, column: string, values: string[]): void,
    updateSelectConditionValue(conditionIndex: number, values: string[]): void,
    updateSelectConditionColumn(conditionIndex: number, column: string): void,
    setSelectingColumns(columns: string[]): void,
    executeSelect(): void,
    executeInsert(inputValues: string[]): void,

    toggleSelectColumn(index: number): void,

    setActiveTable(tableName: string): void,

    addRelative(conditionId: number): void,
    toggleRelative(conditionId: number, isANDSelected: boolean): void,

    setCustomCondition(conditionId: number, conditionValue: string): void,

    removeCondition(conditionId: number): void,

    editCustomCondition(conditionId: number, conditionContent: string): void,

    deleteTableItem(itemId: number): void,

    executeUpdate(inputValues: string[]): void,
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

    setActiveTable(tableName: string): void {
        this.query.setSelectedTable(tableName);
    }

    addSelectCondition(conditionId: number, operator: string, column: string, values: string[]): void {
        let condition = new Condition(conditionId, operator, column, values);
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

    setCustomCondition(conditionId: number, conditionValue: string): void {
        this.query.setCustomCondition(conditionId, conditionValue);
    }

    removeCondition(conditionId: number): void {
        this.query.removeConditionRelative(conditionId);
        this.query.removeCondition(conditionId);
    }

    editCustomCondition(conditionId: number, conditionContent: string) {
        this.query.editCustomCondition(conditionId, conditionContent);
    }

    executeInsert(inputValues: string[]) {
        this.query.getQueryInsertString(inputValues);
    }

    deleteTableItem(itemId: number) {
        this.query.deleteTableItem(itemId);
    }

    executeUpdate(inputValues: string[]) {
        this.query.getQueryUpdateString(inputValues);
    }
}

export const queryBuilder = new QueryBuilder();