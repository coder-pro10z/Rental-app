// import React from react;
import './App.css';
import Home from './Home.js'
import Header from './Header.js'
import Footer from './Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          {/* / */}
          {/* <Route path="/">
          <Home/>
          </Route> */}
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<SearchPage/>} />
          {/* searchPage */}
          {/* <Route path='/search'>
          <SearchPage/>
          </Route> */}
        </Routes>

        <Footer/>

      </Router>

        {/* Searchpage */}
            {/* header */}
          
            {/* ..... */}
    </div>
  ); 
}

export default App;
