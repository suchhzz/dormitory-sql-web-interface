import { getDatabaseConnection } from "../services/databaseService.js";

export const executeSelectQuery = (queryParams) => {
    const db = getDatabaseConnection();

    try {

        const queryString = queryParams.query;

        return db.prepare(queryString).all();

    } catch (e) {
        console.error('execute select error', e);
    } finally {
        db.close();
    }
}

export const executeModifyQuery = (queryParams) => {
    const db = getDatabaseConnection();
    try {
        const queryString = queryParams.query;

        return db.prepare(queryString).run();

    } catch (e) {
        console.error('execute insert error', e);
    } finally {
        db.close();
    }
}