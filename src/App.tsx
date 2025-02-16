import { useEffect, useState } from 'react';
import ButtonPanel from './components/ButtonPanel';
import MenuPanel from './components/MenuPanel';
import Table from './components/Table';
import './scripts/main'
import './scripts/query/abstractions/query'
import { fetchDatabaseData } from './services/databaseService.ts';
import { DatabaseAbstractObjectType, DatabaseType, TableType } from './types/databaseTypes.ts';

function App() {

  const [activeDatabase, setActiveDatabase] = useState<DatabaseType | null>(null);
  const [activeTable, setActiveTable] = useState<TableType | null>(null);
  const [activeTableIndex, setActiveTableIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDatabase = await fetchDatabaseData();
      if (fetchedDatabase) {
        setActiveDatabase(fetchedDatabase.database);
        console.log(fetchedDatabase.database);
        
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(activeDatabase);
    if (activeDatabase && activeDatabase.tables && activeDatabase.tables.length > 0) {
      setActiveTable(activeDatabase.tables[activeTableIndex]);
    } else {
      console.warn("No tables found in activeDatabase");
    }
  }, [activeDatabase]);
  


  return (
    <>
      <div className='main-container'>
        <div className='content d-grid'>
          <div className='button-panel-wrapper'>
            <ButtonPanel />
          </div>
          <div className='table-wrapper'>
            {activeTable && <Table table={activeTable}  />}
          </div>
        </div>
      </div>

      <MenuPanel />
    </>
  )
}

export default App
