import '../App.css';
import Home from './Home'
import List from './List'

function App() {
  return (
    <div className="App">
      <Home />
      {/* home has nav, search, about */}
      <List />
      {/* has recipes */}
    </div>
  );
}

export default App;
