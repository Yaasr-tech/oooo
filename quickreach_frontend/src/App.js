import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/ >}></Route>
        <Route path="/login" element={<Login/ >}></Route>
      </Routes>
    </Router>
  )
}

export default App;
