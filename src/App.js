import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import Staffs from './pages/Staffs/Staffs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/staffs' element={<Staffs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
  );
}

export default App;
