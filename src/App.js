import logo from './logo.svg';
import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import Staffs from './pages/Staffs/Staffs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ServiceDetails from './pages/Services/ServiceDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/service-details/:id' element={<ServiceDetails />}/>
      <Route path='/staffs' element={<Staffs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
  );
}

export default App;
