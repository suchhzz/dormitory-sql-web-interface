import { executeSelectQuery, executeModifyQuery } from "../services/queryService.js";

export const selectQuery = async (req, res) => {
    try {
        const { queryParams } = req.body;

        const query = await executeSelectQuery(queryParams);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryParams.query}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
}

export const insertQuery = async (req, res) => {
    try {
        const { queryParams } = req.body;

        const query = await executeModifyQuery(queryParams);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryParams.query}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
};

export const updateQuery = async (req, res) => {
    try {
        const { queryParams } = req.body;

        const query = await executeModifyQuery(queryParams);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryParams.query}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
}

export const deleteQuery = async (req, res) => {
    try {
        const { queryParams } = req.body;

        const query = await executeModifyQuery(queryParams);

        if (!query) {
            return res.status(400).json({
                error: `failed executing query: ${queryParams.query}`
            });
        }

        return res.send(query);
    } catch (e) {
        res.send(e);
    }
}