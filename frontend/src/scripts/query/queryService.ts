import { queryBuilder } from "./queryBuilder";

export const sendInsertQuery = async (inputValues: string[]) => {
    try {
        let insertQuery = queryBuilder.executeInsert(inputValues);
        console.log('send query to api', insertQuery)
    } catch (e) {
        console.error(e);
    }
}

export const sendUpdateQuery = async (inputValues: string[]) => {
    try {
        let updateQuery = queryBuilder.executeUpdate(inputValues);
        console.log('send query to api', updateQuery)
    } catch (e) {
        console.error(e);
    }
}

export const sendSelectQuery = async () => {
    try {
        let insertQuery = queryBuilder.executeSelect();

        console.log('send query to api', insertQuery)
    } catch (e) {
        console.error(e);
    }
} 