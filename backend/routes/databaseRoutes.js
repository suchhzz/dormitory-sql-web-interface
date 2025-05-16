import express from "express";
import {
  getDatabaseData,
  getTableData,
  getDatabaseTableNames,
  getTableItemData,
} from "../controllers/databaseController.js";

const router = express.Router();

router.get("/", getDatabaseData);
router.get("/tables", getDatabaseTableNames);
router.get("/tables/:tableName", getTableData);
router.get("/tables/:tableName/:id", getTableItemData);

export default router;
