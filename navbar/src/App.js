// import logo from './logo.sg';
// import './App.cs';
import Home from './component/Home'
import {Routes,Route} from 'react-router-dom'
import Navnew from './component/Navnew';
import Signup from './component/pages/Signup';
import Login from './component/pages/Login';

function App() {
  return (
    <>
    <Navnew/>
    < Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
