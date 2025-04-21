interface ICondition {
    id: number,
    column?: string,
    values?: string[],
    operator?: string,

    setId(id: number): void,
    setColumn(column: string): void,
    setValues(values: string[]) : void,
    setOperator(operator: string) : void,

    getCondition(): string,
};

class Condition implements ICondition {

    constructor(
        id: number = -1,
        operator: string = "=",
        column: string = "",
        values: string[] = []
    ) {
        this.id = id;
        this.operator = operator;
        this.column = column;
        this.values = values;
    }

    id: number;
    column: string;
    values: string[];
    operator: string;

    setId(id: number): void {
        this.id = id;
    }

    setColumn(column: string): void {
        this.column = column;
    }

    setValues(values: string[]): void {
        this.values = values;
    }

    setOperator(operator: string): void {
        this.operator = operator;
    }

    getCondition(): string {
        let conditionString: string = "";

        if (this.operator === "BETWEEN") {
            conditionString = `${this.column} ${this.operator} ${this.values[0]} AND ${this.values[1]}`;
        }
        else if (this.operator === "IN") {
            conditionString = `${this.column} ${this.operator} (${this.values.join(", ")})`;
        }
        else {
            conditionString = `${this.column} ${this.operator} ${this.values[0]}`;
        }

        return conditionString;
    }
}


export {  Condition };
export type { ICondition }