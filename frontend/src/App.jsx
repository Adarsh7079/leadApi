import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import {GetAll} from './components/GetAll';
import DataTable from './components/Table';

const App = () => {
  return (
    <div className=' bg-read-500'>
        <Routes>
          <Route path="/" element={<DataTable/>}/>
          <Route path="/m3m-altitude-sector-63-gurugram" element={<Form/>}/>
          <Route path="/getall" element={<GetAll/>}/>
      </Routes>
    </div>
  )
}

export default App
