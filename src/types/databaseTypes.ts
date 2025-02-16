export interface DatabaseAbstractObjectType {
    database: DatabaseType;
}

export interface DatabaseType {
    tables: TableType[],
}

export interface TableType {
    tableName: string,
    columns: string[],
    values: string[][],
}
