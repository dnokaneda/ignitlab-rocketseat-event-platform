import { Route, Routes, useParams } from 'react-router-dom'
import * as P from './pages'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/event' element={<P.Event />} />
      <Route path='/event/lesson/:slug' element={<P.Event />} />
    </Routes>
  )
}