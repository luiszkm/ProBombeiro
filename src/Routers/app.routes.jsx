import { Routes, Route } from 'react-router-dom'


import { FormPage } from "../pages/Form"
import { Records } from "../pages/records"
import { Home} from "../pages/home"

export function AppRoutes() {


  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/records' element={<Records />} />
      <Route path='/home' element={<Home />} />

    </Routes>
  )
}