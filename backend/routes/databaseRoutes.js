import express from "express";
import {
  getDatabaseData,
  getTableData,
  getDatabaseTableNames,
  getTableItemData,
  getTableItems
} from "../controllers/databaseController.js";

const router = express.Router();

router.get('/foreign/tables/:tableName', getTableItems);
router.get("/", getDatabaseData);
router.get("/tables", getDatabaseTableNames);
router.get("/tables/:tableName", getTableData);
router.get("/tables/:tableName/:id", getTableItemData);

export default router;
