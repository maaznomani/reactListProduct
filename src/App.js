import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment'
import Header from './Component/Header'
import { BrowserRouter as Router, 
  Switch,
  Route,
  Link
   } from "react-router-dom";
import Home from "./Component/Views/Home";
import About from "./Component/Views/About";
import Product from "./Component/Views/Product";
   

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Increment/> */}
      {/* <h1 className="border-b font-size p-3">Testing TailWind</h1> */}
      <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/products/:id">
                <Product/>
            </Route>
        </Switch>     
      </Router>
    </div>
  );
}

export default App;
