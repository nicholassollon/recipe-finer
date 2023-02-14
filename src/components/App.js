import '../App.css';
import Home from './Home'
import List from './List'
import Form from './Form'
import RecipiePage from './RecipiePage'
import React, {useEffect} from 'react'


function App() {



  return (
    <div className="App">
      <Home />
      {/* home has nav, search, about */}
      <List />
      <RecipiePage />
    </div>
  );
}

export default App;

