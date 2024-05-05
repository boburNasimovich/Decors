import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Produksya from './pages/Produksya'
import EksterniPlyonki from './pages/EksterniPlyonki'
import Uslugi from './components/Uslugi'
import Preumishestva from './pages/PReimushestva'
import Aksii from './pages/Aksii'
import Otzivi from './pages/Otzivi'
import Sertifikati from './pages/Sertifikati'
import Navosti from './pages/Navosti'
import Kantakt from './pages/Kantakt'
import PlyonkiHyundai from './pages/PlyonkiHyundai'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='Produksiya' element={<Produksya />} />
        <Route path='EksterniPlyonki' element={<EksterniPlyonki />} />
        <Route path='Uslugi' element={<Uslugi />} />
        <Route path='Preimushestva' element={<Preumishestva />} />
        <Route path='Aksii' element={<Aksii />} />
        <Route path='Otzivi' element={<Otzivi />} />
        <Route path='Sertifikati' element={<Sertifikati />} />
        <Route path='Navosti' element={<Navosti />} />
        <Route path='Kantakt' element={<Kantakt />} />
        <Route path='PlyonkiHyundai' element={<PlyonkiHyundai />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App