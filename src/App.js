import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Recommend from './components/Recommand/Recommend'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './components/SearchPage/SearchPage';
function App() {
  
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
        <Route path="/search/:searchTerm">
        <div className="app-page">
        <Sidebar/>
        <SearchPage/>
      </div>
        </Route>
        <Route path="/">
      <div className="app-page">
        <Sidebar/>
        <Recommend/>
      </div>
        </Route>
      </Switch>
    </Router>

      
    </div>
  );
}

export default App;
