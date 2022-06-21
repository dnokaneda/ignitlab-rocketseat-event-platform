import { useQuery } from '@apollo/client'

import { Lesson } from './types'
import { GET_LESSONS_QUERY } from './query'

function App() {
  
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div className='flex justify-center'>
      <ul className='text-2xl'>
        {
          data?.lessons.map((lesson: Lesson) => (
            <li key={lesson.id}>{ lesson.title }</li>
          ))
        }
      </ul>
    </div>
    
  )
}

export default App
