import { getDatabaseConnection } from "../services/databaseService.js";

export const executeSelectQuery = (queryString) => {
    const db = getDatabaseConnection();
    try {
        return db.prepare(queryString).all();

    } catch (e) {
        console.error('execute select error', e);
    } finally {
        db.close();
    }
}

export const executeModifyQuery = (queryString) => {
    const db = getDatabaseConnection();
    try {
        return db.prepare(queryString).run();

    } catch (e) {
        console.error('execute modify error', e);
    } finally {
        db.close();
    }
}