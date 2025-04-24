import Database from "better-sqlite3";


const database = {
    tables: [
        {
            tableName: "persons",
            columns: ["id", "firstname", "lastname", "age"],
            values: [
                ["1", "petr", "petrenko", "26"],
                ["2", "john", "allen", "32"],
                ["3", "maria", "buya", "54"],
                ["4", "joseph", "miller", "21"],
                ["5", "mac", "tavish", "17"]
            ]
        }
    ]
}

const mainDatabase = new Database('database/dormitory.db');

export default { mainDatabase };