import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Service from './Components/Servieces/Service';
import Team from './Components/Team/Team';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Nav />
            <Routes>
              <Route index path='/' element = {<Header />}/>
              <Route path='/about' element = {<About />}/>
              <Route path='/services' element = {<Service/>}/>
              <Route path='/team' element = {<Team />}/>
              <Route path='/contact' element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
