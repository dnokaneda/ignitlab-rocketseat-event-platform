import { useQuery } from "@apollo/client";
import { Player, Youtube, DefaultUi } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'

import { GET_LESSON_BY_SLUG } from '../query'
import { VideoProps, GetLessonBySlugResponse } from '../interfaces'

import '@vime/core/themes/default.css'

function Video({ lessonSlug }: VideoProps) {

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: lessonSlug
    }
  });

  const lesson = data?.lesson;
  const teacher = data?.lesson.teacher;

  return (
    <div className="flex-1">
      
      {/* PLAYER */}
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video text-center">
          <Player>
            { 
              lesson?.videoId 
              ? <>
                  <Youtube videoId={lesson?.videoId} />
                  <DefaultUi />
                </>                 
              : <div className="flex-1" /> 
            }
            
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* INFORMACOES */}
        <div className="flex items-start gap-16">
         
          <div className="flex-1">
            {/* DADOS AULA */}
            <h1 className="text-2xl font-bold">{ lesson?.title }</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{ lesson?.description }</p>
          
            {/* DADOS PROFESSOR */}
            <div className='flex items-center gap-4 mt-6'>
              <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={ teacher?.avatarURL }
                alt={ teacher?.name }
              />

              <div className="leading-relaxed">
                <strong className='font-bold text-2xl block'>{ teacher?.name }</strong>
                <span className='text-gray-200 text-sm block'>{ teacher?.bio }</span>
              </div>

            </div>
          </div>
          
          {/* BOTOES */}
          <div className="flex flex-col gap-4">
            <a href="#" className="p-4 text-sm bg-green-500 flex items-center rouded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rouded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        
        {/* CARDS */}
        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          
          <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers Exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Video;