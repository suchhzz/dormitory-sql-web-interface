import { useEffect, useState } from 'react';
import ButtonPanel from './components/ButtonPanel.tsx';
import MenuPanel from './components/MenuPanel.tsx';
import Table from './components/Table.tsx';
import { fetchDatabaseData } from './services/databaseService.ts';
import { DatabaseType, TableType } from './types/databaseTypes.ts';
import { queryBuilder } from './scripts/query/queryBuilder.ts';

function App() {

  const [activeDatabase, setActiveDatabase] = useState<DatabaseType | null>(null);
  const [activeTable, setActiveTable] = useState<TableType | null>(null);
  const [activeTableIndex] = useState<number>(0);
  const [tableColumns, setTableColumns] = useState<string[]>([]);
  
  const [editValues, setEditValues] = useState<string[]>([]);
  const [tempEditValues, setTempEditValues] = useState(['1', 'petr', 'petrenko', '26']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDatabase = await fetchDatabaseData();
        if (fetchedDatabase) {
          setActiveDatabase(fetchedDatabase.database);
        }
      } catch (error) {
        console.error("Error fetching database data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activeDatabase && activeDatabase.tables && activeDatabase.tables.length > 0) {
      setActiveTable(activeDatabase.tables[activeTableIndex]);
      setTableColumns(activeDatabase.tables[activeTableIndex].columns);
    } else {
      console.warn("No tables found in activeDatabase");
    }
  }, [activeDatabase]);

  useEffect(() => {
    if (activeTable) {
      queryBuilder.setActiveTable(activeTable.tableName);
    }
  }, [activeTable]);

  const editValue = (editObject: string[]) => {
    setEditValues(editObject);
  }

  const clearEditValue = () => {
    console.log('clearing edit..')
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
