import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import {GetAll} from './components/GetAll';
import { Table } from './components/Table';
import { ProjectPage } from './components/project/ProjectPage';
import Home from './components/Home';

const App = () => {
  return (
    <div className=' bg-read-500'>
        <Routes>
          <Route path="/" element={<Table/>}/>
          {/* <Route path="/" element={<Home/>}/> */}

          <Route path="/m3m-altitude-sector-63-gurugram" element={<ProjectPage/>}/>
          <Route path="/getall" element={<Table/>}/>
      </Routes>
    </div>
  )
}

export default App
