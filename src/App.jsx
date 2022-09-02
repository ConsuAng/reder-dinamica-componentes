import './App.css';
import List from './components/list-of-collaborators/List';
import Navbar from './layout/navbar/Navbar';
import FormCollaborator from './components/form-collaboratos/Form';
import { useState } from 'react';
import data from './assets/data/data.json';

function App() {
  const [collaborators, setCollaborator] = useState(data);
  const [collabList, setCollabList] = useState(collaborators);

  return (
    <>
      <Navbar  data={collaborators} setCollabList={setCollabList}/>
      <FormCollaborator 
        data={collaborators} 
        setCollaborator={setCollaborator} 
      />
      <List collabList={collabList}/> 
    </>
  )
}

export default App
