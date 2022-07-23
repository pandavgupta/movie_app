import logo from './logo.svg';
import './App.css';
import Nav_bar from './Components/Nav_bar'
import Banner from './Components/banner';
import React from 'react';
import My_movie_data from './Components/movie_lists';
import Favourite from './Components/favourite';
import { Routes, Route } from 'react-router-dom';
import { movies } from './Components/get_movies';
function App() {
  return (
     <>
         <Nav_bar/>
         <Routes>
            <Route path="/" element={[<Banner/>,<My_movie_data/>]}>  
            </Route>
           <Route path='/favourite' element={<Favourite/>}>
           </Route>
         </Routes>
     </>
     
 
  );
}

export default App;
