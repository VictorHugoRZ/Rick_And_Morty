import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '95383a07e06f.4e276d92a5540b94fe23';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const newCharacters = characters.filter((character) => {
         return character.id !== (id);
       });
       setCharacters(newCharacters);
   }
 
   return (
         <div className='App'>
            <Nav onSearch={onSearch}/>
            <Routes>
            <Route exact path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/detail/:id' element={<Detail />}/>
            </Routes>
         </div>
   );
} 

export default App;
