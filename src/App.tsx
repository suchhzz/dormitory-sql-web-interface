import ButtonPanel from './components/ButtonPanel';
import MenuPanel from './components/MenuPanel';
import Table from './components/Table';
import './scripts/main'
import './scripts/query/abstractions/query'

function App() {
  return (
    <>
      <div className='main-container'>
        <div className='content d-grid'>
          <div className='button-panel-wrapper'>
            <ButtonPanel />
          </div>
          <div className='table-wrapper'>
            <Table />
          </div>
        </div>
      </div>

      <MenuPanel />
    </>
  )
}

export default App
