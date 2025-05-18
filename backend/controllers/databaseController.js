import database from "../models/databaseModel.js";
import {
  getTableDataByTableName,
  getDatabaseTableName,
  getTableItemDataById,
  getTableItemsByTableName,
} from "../services/databaseService.js";
import { tableDataResponseDTO } from "../dto/TableData.dto.js";

export const getDatabaseData = (req, res) => {
  try {
    res.send(database);
  } catch (e) {
    res.send(e);
  }
};

export const getTableData = async (req, res) => {
  try {
    const { tableName } = req.params;

    const tableData = await getTableDataByTableName(tableName);

    console.log("table data", tableData);

    const tableDataDTO = tableDataResponseDTO(tableData, tableName);

    return res.json(tableDataDTO);
  } catch (e) {
    console.error("Controller error:", e);
    return res.status(500).json({
      error: "Database operation failed",
      details: e.message,
    });
  }
};

export const getDatabaseTableNames = async (_, res) => {
  try {
    const tableNames = await getDatabaseTableName();

    return res.json(tableNames);
  } catch (e) {
    return res.status(404);
  }
};

export const getTableItemData = async (req, res) => {
  try {
    const { tableName, id } = req.params;

    const tableItemData = await getTableItemDataById(tableName, id);

    res.json(tableItemData);
  } catch (e) {
    console.error(e);

    return (
      res.status(500),
      json({
        error: "fetching table item data error",
        details: e.message,
      })
    );
  }
};

export const getTableItems = async (req, res) => {
  try {
    const { tableName } = req.params;

    console.log('foreign table', tableName);

    const tableItemsData = await getTableItemsByTableName(tableName);

    res.json(tableItemsData);
  } catch (e) {
    console.error(e);

    return (
      res.status(500),
      json({
        error: "fetching table item data error",
        details: e.message,
      })
    );
  }
}