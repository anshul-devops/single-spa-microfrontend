import React from 'react';
import Details from './details';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Details data={props.context}/>
    </div>
  );
}

export default App;
