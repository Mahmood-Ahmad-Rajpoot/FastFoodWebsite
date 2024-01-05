import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Home from './Pages/Home'
import ForeCast from './Pages/ForeCast'
import Calender from './Pages/Calender'
import Location from './Pages/Location'
import Analytics from './Pages/Analytics'
import Settings from './Pages/Settings'

const Navigations = () => {
  return (<></>
  //  <BrowserRouter>
  //  <Routes>
  //   <Route path='/' element={<Main/>}>
  //       <Route index element={<Home/>}/>
  //       <Route path='/ForeCast'  element={<ForeCast/>}/>
  //       <Route path='/Calender'   element={<Calender/>}/>
  //       <Route path='/Locations' element={<Location/>}/>
  //       <Route path='/Analytics' element={<Analytics/>}/>
  //       <Route path='/Settings' element={<Settings/>}/>
  //   </Route>
  //  </Routes>
  //  </BrowserRouter>
  )
}

export default Navigations