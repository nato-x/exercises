import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arr = [1,2,3,4,5,6]
function App() {
  return (
    <div className="App">
      {arr.map(e =>task(e))}
    </div>
  );
}

export default App;
