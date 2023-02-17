
import Home from './Home'
import Form from './Form'
import Nav from './Nav'
import RecipiePage from './RecipiePage'
import React from 'react'
import {Route, Switch} from "react-router-dom"
import Recipe from "./Recipe"


function App() {
  return (
    <div className="App">
      <Switch>
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
        </Route>
        <Route path={`/recipes/:id`}>
          <Nav />
          <Recipe />
        </Route>
      </Switch>
    </div>
  );
}

//   return (
//     <div className="App">

//       <Nav />
//       <Home />
//     </div>
//   );
// }

export default App;
