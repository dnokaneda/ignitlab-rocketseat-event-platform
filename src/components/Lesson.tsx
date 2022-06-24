import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { LessonProps } from '../interfaces'

function Lesson(props: LessonProps) {
  const isAvailable: boolean = isPast(props.availableAt);
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300 group-hover:text-blue-500">
        { format(props.availableAt, "EEEE' . ' d' de 'MMMM' . 'k'h'mm", { locale: ptBR }) }
      </span>
      
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 group-hover:bg-gray-900">
        
        <header className="flex items-center justify-between">
          {
            isAvailable
              ? ( <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                    <CheckCircle size={20} />
                    Conteúdo liberado
                  </span> )
              : ( <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20} />
                    Em breve
                  </span> )
          }
          
          <span className="text-xs rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold">
            { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          { props.title }
        </strong>
      </div>
    </Link>
  )
}

export default Lesson;