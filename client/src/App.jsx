import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-out" element={<SignOut/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
