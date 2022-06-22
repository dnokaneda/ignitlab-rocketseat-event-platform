import * as C from '../components'

function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <C.Header />
      <main className='flex flex-1'>
        <C.Video />
        <C.Sidebar />           
      </main>      
    </div>
  )
}

export default Event;
