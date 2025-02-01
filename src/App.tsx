import ButtonPanel from './components/ButtonPanel';
import Table from './components/Table';
import './scripts/example'

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
    </>
  )
}

export default App
