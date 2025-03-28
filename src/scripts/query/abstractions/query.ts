import { ICondition, Condition } from './Condition'
import { TableColumn } from './TableColumn'

interface IQuery {
    selectedColumns?: TableColumn[],
    selectedTable?: string,
    conditions?: Condition[],
    relatives?: string[],

    getQuerySelect(): string,

    setSelectedTable(table: string): void,
    addCondition(condition: Condition): void,
    addRelative(relative: string): void,

    updateConditionValue(conditionIndex: number, values: string[]): void,
    updateConditionColumn(conditionIndex: number, column: string): void,

    setColumns(columns: string[]): void,
    toggleSelectColumn(index: number): void,

    addRelative(): void,
    toggleRelative(conditionId: number, isANDSelected: boolean): void,
    setCustomCondition(conditionId: number, conditionValue: string): void,

    removeCondition(conditionId: number): void,
}

class Query implements IQuery {
    selectedColumns: TableColumn[] = [ new TableColumn("*", true) ];
    selectedTable: string = "";
    conditions: Condition[] = [];
    relatives: string[] = [];

    setSelectedTable(table: string): void {
        this.selectedTable = table;
        console.log(this.selectedTable);
    }
    addCondition(condition: Condition): void {
        this.conditions?.push(condition);

        console.log('conditions', this.conditions);
    }

    addRelative(): void {
        this.relatives.push("AND");

        console.log(this.relatives);
    }

    toggleRelative(conditionId: number, isANDSelected: boolean): void {
        isANDSelected ? this.relatives[conditionId - 1] = "AND" : this.relatives[conditionId - 1] = "OR";

        console.log(this.relatives);
    }

    updateConditionValue(conditionIndex: number, values: string[]): void {
        this.conditions[conditionIndex].values = [...values];
    }

    updateConditionColumn(conditionIndex: number, column: string): void {
        this.conditions[conditionIndex].column = column;
    }

    getQuerySelect(): string {
        let queryString: string = "";

        queryString += this.getHeaderSelectQueryString(this.selectedColumns, this.selectedTable);
        queryString += this.getConditionsSelectQueryString(this.conditions);

        return queryString;
    }

    getHeaderSelectQueryString(columns: TableColumn[], table: string): string {
        return `SELECT ${columns.filter(el => el.isSelected === true)
                        .map(el => el.name)
                        .join(', ')} FROM ${table} \n`;
    }

    getConditionsSelectQueryString(conditions: ICondition[]) {

        let buildConditionString: string = "WHERE" + '\n';

        conditions.map((item, index) => {
            if (index !== 0) {
                buildConditionString += this.relatives[index - 1] + "\n";
            }
            buildConditionString += item.getCondition() + "\n";
        });

        return buildConditionString;
    }

    getQueryInsertString(): string {

        let queryString: string = "";

        queryString += this.getHeaderInsertQueryString(this.selectedColumns, this.selectedTable);

        // queryString += this.getValuesInsertQueryString(this.);

        return "";
    }

    getHeaderInsertQueryString(columns: TableColumn[], table: string) {
        return `INSERT INTO (${columns.map(el => el.name).join(' ')}) FROM ${table}`;
    }

    getValuesInsertQueryString(values: string[]) {
        return `VALUES (${values.join(' ')})`;
    }

    setColumns(columns: string[]): void {
        columns.forEach(column => {
            this.selectedColumns.push(new TableColumn(column));
        });
    }

    toggleSelectColumn(index: number): void {
        this.selectedColumns[index].toggleSelectColumn();

        console.log(this.selectedColumns);
    }

    setCustomCondition(conditionId: number, conditionValue: string): void {
        const newCustomCondition = new Condition(conditionId, "", "", [conditionValue]);
        this.addCondition(newCustomCondition);
    }

    removeCondition(conditionId: number): void {
        this.conditions = this.conditions.filter((item) => item.id !== conditionId);

        console.log('conditions', this.conditions);
    }
}

export {  Query };
export type { IQuery }