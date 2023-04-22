import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import axios from 'axios';
import Favorites from './components/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '95383a07e06f.4e276d92a5540b94fe23';

function App() {

   const navigate = useNavigate();

   const location = useLocation();

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const email = 'v.zamoravictor@gmail.com';
   const password = 'porfirio1';

   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => { 
      !access && navigate('/')
   }, [access]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
 
   return (
         <div className='App'>
            {
               location.pathname !== '/' 
               ? <Nav onSearch={onSearch}/>
               : null
               //location.pathname !== '/' && <Nav onSearch={onSearch}/> esta es otra manera
            }
            <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         </div>
   );
} 

export default App; 