import { queryBuilder } from "./queryBuilder";
import axios from "axios";

export const sendInsertQuery = async (inputValues: string[]) => {
    try {
        return queryBuilder.executeInsert(inputValues);

    } catch (e) {
        console.error(e);
    }
}

export const sendUpdateQuery = async (inputValues: string[]) => {
    try {
        const updateQuery = queryBuilder.executeUpdate(inputValues);
        console.log('send query to api', updateQuery)
    } catch (e) {
        console.error(e);
    }
}

export const sendSelectQuery = async () => {
    try {
        const insertQuery = queryBuilder.executeSelect();

        const payload = { queryString: insertQuery }

        const response = await axios.post("http://localhost:8080/api/query/select", payload);

        if (response.status === 200) {
            console.log('select executed successfuly', response.data);
        }

        return response.data;
    } catch (e) {
        console.error(e);
    }
} 