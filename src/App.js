import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import SignUp from './Pages/Login/SignUp';
import ToolDetail from './Pages/Home/ToolDetail';
import RequireAuth from '../src/Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tool/:_id' element={
          <RequireAuth>
             <ToolDetail></ToolDetail>
          </RequireAuth>
        }></Route>
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
