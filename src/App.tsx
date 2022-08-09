import React from 'react';
import './App.css';
import CardGroup from './components/card-group';

function App() {
  return (
    <div className="container mx-auto w-3/4 mt-10">
      <div className="grid gap-10 grid-cols-4 grid-rows-3">
        <CardGroup />
      </div>
    </div>
  );
}

export default App;
