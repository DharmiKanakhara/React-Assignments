import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import EditUser from './EditUser';
import CounterApp from './CounterApp';

function App() {
  return (
    <div>
        

      <BrowserRouter>
        <CounterApp/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<AddUser/>}></Route>
          <Route path='/edit/:id' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
