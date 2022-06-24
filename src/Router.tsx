import { Route, Routes, useParams } from 'react-router-dom'
import * as P from './pages'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<P.Subscribe />} />
      <Route path='/event' element={<P.Event />} />
      <Route path='/event/lesson/:slug' element={<P.Event />} />
    </Routes>
  )
}