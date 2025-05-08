import { executeSelectQuery, executeModifyQuery } from "../services/queryService.js";
import { tableValuesResponseDTO } from "../dto/TableData.dto.js";

export const selectQuery = async (req, res) => {
    try {
        const { queryString } = req.body;

        const query = await executeSelectQuery(queryString);


        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryString}`
            });
        }

        const queryValuesOut = tableValuesResponseDTO(query);

        return res.send(queryValuesOut);
    } catch (e) {
        res.send(e);
    }
}

export const insertQuery = async (req, res) => {
    try {
        const { queryString } = req.body;

        console.log('query string', queryString);

        const query = await executeModifyQuery(queryString);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryString}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
};

export const updateQuery = async (req, res) => {
    try {
        const { queryString } = req.body;

        console.log('query string', queryString);

        const query = await executeModifyQuery(queryString);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryString}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
}

export const deleteQuery = async (req, res) => {
    try {
        const { queryString } = req.body;

        console.log('api delete query', queryString);

        const query = await executeModifyQuery(queryString);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryString}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
}