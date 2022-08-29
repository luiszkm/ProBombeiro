import { Routes, Route } from 'react-router-dom'


import { FormPage } from "../pages/Form"
import { Records } from "../pages/records"

export function AppRoutes() {


  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/records' element={<Records />} />

    </Routes>
  )
}