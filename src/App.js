import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntries/AddEntryForm';
function App() {

 const[entries, setEntries ]=useState([{weight: 175, date: '11-23-2021'}])

 function addNewEntry(entry){
  let tempEntry =[ ...entries, entry];

  setEntries(tempEntry);
 }

  return (
    <div>
    
   <DisplayEntries parentEntries={entries}/>
  <AddEntryForm addNewEntryProperty={addNewEntry}/>

    </div>
  );
}

export default App;
