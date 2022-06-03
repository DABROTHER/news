import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './components/news';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <News />
          </Route>
        </Switch>
      </Router>
      {/* <News /> */}
    </>
  );
}

export default App;
