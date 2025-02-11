import Condition1 from '../../../components/select-modal/condition-items/Condition';
import { ICondition } from './condition'

interface IQuery {
    selectedColumns?: string[],
    selectedTable?: string,
    conditions?: ICondition[],
    relatives?: string[],

    getQueryString(): string,

    setSelectedColumn(column: string): void,
    setSelectedTable(table: string): void,
    addCondition(condition: ICondition): void,
    addRelative(relative: string): void,
}

class Query implements IQuery {
    selectedColumns: string[] = [];
    selectedTable: string = "";
    conditions: ICondition[] = [];
    relatives: string[] = [];

    setSelectedColumn(column: string): void {
        this.selectedColumns?.push(column);
    }
    setSelectedTable(table: string): void {
        this.selectedTable = table;
    }
    addCondition(condition: ICondition): void {
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

        let buildConditionString: string = "";

        conditions.map((item) => {
            buildConditionString += item.getCondition() + "\n";
        });

        return buildConditionString;
    }
}

let condition1: ICondition = new Condition1()