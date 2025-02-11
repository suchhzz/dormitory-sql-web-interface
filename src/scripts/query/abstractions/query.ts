import { ICondition, Condition } from './condition'

interface IQuery {
    selectedColumns?: string[],
    selectedTable?: string,
    conditions?: ICondition[],
    relatives?: string[],

    getQueryString(): string,

    setSelectedColumn(column: string): void,
    setSelectedTable(table: string): void,
    addCondition(condition: Condition): void,
    addRelative(relative: string): void,
}

class Query implements IQuery {
    selectedColumns: string[] = [];
    selectedTable: string = "";
    conditions: Condition[] = [];
    relatives: string[] = [];

    setSelectedColumn(column: string): void {
        this.selectedColumns?.push(column);
    }
    setSelectedTable(table: string): void {
        this.selectedTable = table;
    }
    addCondition(condition: Condition): void {
        this.conditions?.push(condition);
    }
    addRelative(relative: string): void {
        this.relatives?.push(relative);
    }

    getQueryString(): string {
        let queryString: string = "";

        queryString += this.getHeaderQueryString(this.selectedColumns, this.selectedTable);
        queryString += this.getConditionsQueryString(this.conditions);

        return queryString;
    }

    getHeaderQueryString(columns: string[], table: string): string {
        return `SELECT ${columns.join(', ')} FROM ${table} \n`;
    }

    getConditionsQueryString(conditions: ICondition[]) {

        let buildConditionString: string = "WHERE" + '\n';

        conditions.map((item) => {
            buildConditionString += item.getCondition() + "\n";
        });

        return buildConditionString;
    }
}


let condition1: Condition = new Condition('=', 'column1', ['123']);
let condition2: Condition = new Condition('BETWEEN', 'column2', ['123213', '432']);
let condition3: Condition = new Condition('IN', 'column2', ['123', '1234324', 'FDSAFASD']);

let query: Query = new Query();
query.setSelectedColumn('*');
query.setSelectedTable('table-test');

query.addCondition(condition1);
query.addCondition(condition2);
query.addCondition(condition3);

console.log(query.getQueryString());