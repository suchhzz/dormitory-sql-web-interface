import { useEffect, useState } from 'react';
import ButtonPanel from './components/ButtonPanel';
import MenuPanel from './components/MenuPanel';
import Table from './components/Table';
import './scripts/main'
import './scripts/query/abstractions/query'
import { fetchDatabaseData } from './services/databaseService.ts';

function App() {

  const [activeDatabase, setActiveDatabase] = useState<Object | null>(null);
  const [activeTable, setActiveTable] = useState<Object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDatabase = await fetchDatabaseData();
      if (fetchedDatabase) {
        setActiveDatabase(fetchedDatabase);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className='main-container'>
        <div className='content d-grid'>
          <div className='button-panel-wrapper'>
            <ButtonPanel />
          </div>
          <div className='table-wrapper'>
            <Table table={activeDatabase ? activeDatabase.tables.table : null } />
          </div>
        </div>
      </div>

      <MenuPanel />
    </>
  )
}

export default App
