import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center flex-col pt-10'>
      <h1 className='text-center mb-5'>Hallo</h1>
      <button className='bg-slate-800 text-white font-semibold p-2 rounded-md'>ini Button</button>
    </div>
  )
}

export default App
