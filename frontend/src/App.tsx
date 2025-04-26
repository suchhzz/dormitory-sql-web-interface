import { useEffect, useState } from 'react';
import ButtonPanel from './components/ButtonPanel.tsx';
import MenuPanel from './components/MenuPanel.tsx';
import Table from './components/Table.tsx';
import { fetchDatabaseData, fetchTableNames, fetchTableDataByName } from './services/databaseService.ts';
import { DatabaseType, TableType } from './types/databaseTypes.ts';
import { queryBuilder } from './scripts/query/queryBuilder.ts';

function App() {

  const [activeTable, setActiveTable] = useState<TableType | null>(null);
  const [activeTableIndex] = useState<number>(0);
  const [tableColumns, setTableColumns] = useState<string[]>([]);

  const [editValues, setEditValues] = useState<string[]>([]);
  const [tempEditValues, setTempEditValues] = useState(['1', 'petr', 'petrenko', '26']);

  const [tableNames, setTableNames] = useState([]);
  const [selectedTableName, setSelectedTableName] = useState("");

  useEffect(() => {

    const fetchTables = async () => {
      try {
        const fetchedTables = await fetchTableNames();
        if (fetchedTables) {
          setTableNames(fetchedTables);
        }
      } catch (e) {
        console.error("Error fetching table names:", e);
      }
    }

    fetchTables();

  }, [])

  useEffect(() => {
    if (tableNames.length > 0) {
      setSelectedTableName(tableNames[0]);
    }
  }, [tableNames]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const fetchedTableData = await fetchTableDataByName(selectedTableName);
        if (fetchedTableData) {
          console.log('fetched table data', fetchedTableData)
          setActiveTable(fetchedTableData);
          setTableColumns(fetchedTableData.columns)
        }
      } catch (e) {
        console.error("Error fetching table data:", e);
      }
    }

    if (selectedTableName) {

      fetchTableData(); 
    }
  }, [selectedTableName]);



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedDatabase = await fetchDatabaseData();
  //       if (fetchedDatabase) {
  //         setActiveDatabase(fetchedDatabase.database);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching database data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (activeTable) {
      queryBuilder.setActiveTable(activeTable.tableName);
    }
  }, [activeTable]);

  const editValue = (editObject: string[]) => {
    setEditValues(editObject);
  }

  const clearEditValue = () => {
    setEditValues([]);
  }

  return (
    <>
      <div className='main-container'>
        <div className='content d-grid'>
          <div className='button-panel-wrapper'>
            {activeTable && <ButtonPanel
              tableColumnItems={tableColumns}
              tableName={activeTable?.tableName}
              editValues={editValues}
              clearEditValue={clearEditValue}
            />}
          </div>
          <div className='table-wrapper'>
            {activeTable && <Table
              table={activeTable}
              editValue={editValue}
            />}
          </div>
        </div>
      </div>

      <MenuPanel />
    </>
  )
}

export default App
