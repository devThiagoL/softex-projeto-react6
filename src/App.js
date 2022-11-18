import logo from './logo.svg';
import './App.css';
import Comp from './componente';
import Welcome from './comprops';
import Contar from './exemplohook';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import User from './pages/user';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estudante Thiago Lima 
          <Comp />
          <Welcome />
          <Contar />
        </p>

        <Router>
          <div className='App'>
            <ul>
              <li> <Link to='/'>Home</Link> </li>
              <li> <Link to='/about'>About</Link> </li>
              <li> <Link to='/user/meunome'>User</Link> </li>
            </ul>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<h1>Not Found</h1>}/>
              <Route path='user/:name' element={<User />} >
                <Route path='edit' element={<h1>Editar perfil</h1>}/>
                <Route path='Order' element={<h1>Meus Pedidos</h1>}/>
              </Route>
            </Routes>
          </div>
          </Router>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  
      </header>
    </div>
  );
}


export default App;
