import { useQuery } from "@apollo/client";
import Lesson from "./Lesson";
import { GetLessonsResponse } from '../interfaces';
import { GET_LESSONS } from '../query';


export function Sidebar() {

  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS)

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))
        } 
      </div>

    </aside>
  )
}

export default Sidebar;