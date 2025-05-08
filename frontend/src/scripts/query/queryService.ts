import { queryBuilder } from "./queryBuilder";
import axios from "axios";

export const sendInsertQuery = async (inputValues: string[]) => {
    try {
        const insertQuery = queryBuilder.executeInsert(inputValues);

        console.log('insert query', insertQuery);

        const payload = { queryString: insertQuery };

        const response = await axios.post('http://localhost:8080/api/query/insert', payload);

        if (response.status === 200) {
            console.log('insert executed successfuly', response.data);
        }

        return response.data;

    } catch (e) {
        console.error(e);
    }
}

export const sendUpdateQuery = async (inputValues: string[]) => {
    try {
        const updateQuery = queryBuilder.executeUpdate(inputValues);

        const payload = { queryString: updateQuery };

        const response = await axios.patch('http://localhost:8080/api/query/update', payload);

        if (response.status === 200) {
            console.log('update executed successfuly', response.data);
        }
    } catch (e) {
        console.error(e);
    }
}

export const sendSelectQuery = async (selectQuery: string) => {
    try {
        console.log('select query', selectQuery);

        const payload = { queryString: selectQuery }

        const response = await axios.post("http://localhost:8080/api/query/select", payload);

        if (response.status === 200) {
            console.log('select executed successfuly', response.data);

            queryBuilder.setLastSelectQuery(selectQuery);
        }

        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const sendDeleteQuery = async (id: number) => {
    try {

        const deleteQuery = queryBuilder.deleteTableItem(id);

        console.log('delete query', deleteQuery);

        const payload = { queryString: deleteQuery }

        const response = await axios.post("http://localhost:8080/api/query/delete", payload);

        if (response.status === 200) {
            console.log('select executed successfuly', response.data);
        }

        return response.data;
    } catch (e) {
        console.error(e);
    }
}