
import React from 'react';
import './App.css';
import {Route, Routes } from "react-router-dom";

//componentes
import {NavbarEx, BlogPost, BlogList} from './Components';

function App() {
    <div className='App'>
        <React.Fragment>
            <NavbarEx/>
            <Routes>
                <Route path="/BlogPost" element={<BlogPost/>}/>
                <Route path="/BlogList" element={<BlogList/>}/>
            </Routes>
        </React.Fragment>
    </div>
}
export default App;
  