import axios from "axios";
import { queryBuilder } from "../scripts/query/queryBuilder";
const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchDatabaseData() {
    try {
        console.log('vite url', apiUrl)
        // const response = await axios.get(`${apiUrl}/home/database`);
        const response = await axios.get(`http://localhost:8080/api/home/database`);

        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        }

    } catch (e) {
        console.error(`fetching data error ${e}`);
        return null;
    }
}

export async function fetchTableNames() {
    try {
        const response = await axios.get('http://localhost:8080/api/database/tables');

        return response.data;
    } catch (e) {
        console.error(`fetching table names error ${e}`);
        return null;
    }
}

export async function fetchTableDataByName(tableName: string) {
    try {
        const response = await axios.get(`http://localhost:8080/api/database/tables/${tableName}`);

        if (response.status === 200) {
            const lastQuery = `SELECT * FROM ${tableName}`;

            queryBuilder.setLastSelectQuery(lastQuery);
        }

        return response.data;
    } catch (e) {
        console.error(`fetching table data error ${e}`);
        return null;
    }
}