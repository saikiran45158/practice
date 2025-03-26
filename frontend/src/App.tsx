import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Menu from './components/Menu';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';
import Delete from './components/Delete';
import './App.css'

export default function App() {
  return (
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/menu' element={<Menu/>}>
              <Route path='home' element={<Home />}>  </Route>
              <Route path='add' element={<Add />}>  </Route>
              <Route path='update' element={<Update />}></Route>
              <Route path='delete' element={<Delete />}></Route>
          </Route>
        </Routes>   
  );
}
