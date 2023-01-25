import React from "react";
import './App.css'
import Feedback from "./Components/Feedback";
import Test  from "./test"
import FormContainer from "./containers/FormContainer";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="form">
        <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">test</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< FormContainer />}></Route>
                 <Route exact path='/test' element={<Test />}></Route>
          </Routes>
          </div>
       </Router>
      {/* <FormContainer/> */}
    {/* <Test/> */}
    </div>
  );
}

export default App;
