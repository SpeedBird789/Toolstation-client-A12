import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
