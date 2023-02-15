import '../App.css';
import Home from './Home'
import Form from './Form'
import Nav from './Nav'
import RecipiePage from './RecipiePage'
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
          <Nav />
          <Home />
        </Route>
        <Route exact path="/home">
          <Nav />
          <Home />
        </Route>
        <Route exact path="/form">
          <Nav />
          <Form />
        </Route>
        <Route exact path="/recipes">
          <Nav />
          <RecipiePage />
        </Route></BrowserRouter>
    </div>)
}

//   return (
//     <div className="App">

//       <Nav />
//       <Home />
//     </div>
//   );
// }

export default App;

