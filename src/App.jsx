import './App.css';
import List from './components/list-of-collaborators/List';
import data from './assets/data/data.json';

function App() {
  const dataInfo= data;

  return (
    <>
      <List data={dataInfo}/> 
    </>
  )
}

export default App
