
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./Header"
import Subscribe from "./Subscribe";
import Login from "./Login";
import Home from "./Home";
import Footer from "./Footer"
import {Search} from "./Search";
import Movies from "./Movies";



  

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
    <Route path={"/"} element={<Home />}/>
    <Route path={"/subscribe"} element={<Subscribe />}/>
    <Route path={"/login"} element={<Login />}/>
    <Route path={"/search"} element={<Search />}/>
    <Route path={"/MOVIES"} element={<Movies />}/>
    
  
  </Routes>
  <Footer/>
 
  </Router>
 </>
  )
}
export default App;






