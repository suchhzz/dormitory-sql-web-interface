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
}

class Query implements IQuery {
    selectedColumns: TableColumn[] = [];
    selectedTable: string = "table";
    conditions: Condition[] = [];
    relatives: string[] = [];

    setSelectedTable(table: string): void {
        this.selectedTable = table;
    }
    addCondition(condition: Condition): void {
        this.conditions?.push(condition);
    }
    addRelative(relative: string): void {
        this.relatives?.push(relative);
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

        conditions.map((item) => {
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
    }

}

export {  Query };
export type { IQuery }

// let condition1: Condition = new Condition('=', 'column1', ['123']);
// let condition2: Condition = new Condition('BETWEEN', 'column2', ['123213', '432']);
// let condition3: Condition = new Condition('IN', 'column2', ['123', '1234324', 'FDSAFASD']);

// let query: Query = new Query();
// query.setSelectedColumn('*');
// query.setSelectedTable('table-test');

// query.addCondition(condition1);
// query.addCondition(condition2);
// query.addCondition(condition3);

// console.log(query.getQuerySelectString());