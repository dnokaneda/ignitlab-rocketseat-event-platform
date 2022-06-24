
import { useState, FormEvent } from 'react'
import { Spinner } from 'phosphor-react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { Logo } from '../components'
import { CREATE_SUBSCRIBER_MUTATION } from '../query'

function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({ variables: { name, email } });
    // navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma aplicação completa, do zero, com React JS</h1>

          <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14 text-blue-300"
              type="text"
              onChange={({ target }) => setName(target.value)}
              placeholder="Seu nome completo"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 text-blue-300"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Digite seu melhor email"
            />
            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded flex justify-center font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              { loading ? <Spinner size={20} /> : 'Garantir minha vaga' }  
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/group.png" className="mt-10" alt="" />      
    </div>
  )
}

export default Subscribe;
