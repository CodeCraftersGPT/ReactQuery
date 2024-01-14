//create app component and import Planets component and render it

import React from 'react';
// import react-router-dom components for navigation
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import Home from './Pages/Home.Page';
import ReactBooks from './Pages/ReactBooks.Page';
import Books from './Pages/Books.Page';




const App = () => {
  return (
    <div>
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/traditional-books">Traditional Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/react-books">React Books</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

          <Routes>
            <Route path="/traditional-books" element={<Books/>} />
       
            <Route path="/react-books" element={<ReactBooks/>} />
           
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App; 
