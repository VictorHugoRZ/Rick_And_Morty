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

function App() {

   const navigate = useNavigate();

   const location = useLocation();

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3002/rickandmorty/login/';
      try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      if (data) {
         const { access } = data;
         setAccess(access);
         access && navigate('/home'); 
      }
      } catch (error) {
         throw error
      }
   }

   useEffect(() => { 
      !access && navigate('/')
   }, [access]);

   const onSearch = async (id) => {
      try {
      const { data } = await axios(`http://localhost:3002/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
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
