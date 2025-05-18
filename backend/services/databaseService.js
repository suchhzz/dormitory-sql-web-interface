import Database from "better-sqlite3";
// import { mainDatabase } from '../models/databaseModel.js'

export const getDatabaseConnection = () => {
  return new Database("database/dormitory");
};

export const getTableDataByTableName = (tableName) => {
  const db = getDatabaseConnection();
  try {
    const columnsInfo = db.prepare(`PRAGMA table_info(${tableName})`).all();

    const foreignKeys = db
      .prepare(`PRAGMA foreign_key_list(${tableName})`)
      .all();

    const data = db.prepare(`SELECT * FROM ${tableName}`).all();

    return {
      columnsInfo,
      foreignKeys,
      data,
    };
  } catch (e) {
    console.error("fetch table error", e);
  } finally {
    db.close();
  }
};

export const getTableItemDataById = (tableName, id) => {
  const db = getDatabaseConnection();

  try {
    return db.prepare(`SELECT * FROM ${tableName} WHERE id=${id};`).get();
  } catch (e) {
    console.error("fetch table item error", e);
  } finally {
    db.close();
  }
};

export const getDatabaseTableName = () => {
  const db = getDatabaseConnection();

  try {
    return db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`
      )
      .all()
      .map((row) => row.name);
  } catch (e) {
    console.error("fetch table name error", e);
  } finally {
    db.close();
  }
};

export const getTableItemsByTableName = (tableName) => {
  const db = getDatabaseConnection();
  try {
    return db
      .prepare(
        `SELECT * FROM ${tableName};`
      )
      .all();
  } catch (e) {
    console.error("fetch table items error", e);
  } finally {
    db.close();
  }
}