import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("pink")
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='flex flex-wrap bottom-12 justify-center inset-x-d30 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white'> 
         <button onClick={()=>setColor("red")} className='px-4 py-1 outline-none shadow-lg rounded-full text-white  ' style={{backgroundColor: "red"}}>RED</button>
         <button onClick={()=>setColor("blue")} className='px-4 py-1 outline-none shadow-lg rounded-full text-white  ' style={{backgroundColor: "blue"}}>BLUE</button>
         <button onClick={()=>setColor("green")} className='px-4 py-1 outline-none shadow-lg rounded-full text-white  ' style={{backgroundColor: "green"}}>GREEN</button>
         <button onClick={()=>setColor("yellow")} className='px-4 py-1 outline-none shadow-lg rounded-full text-white  ' style={{backgroundColor: "yellow"}}>YELLOW</button>
         <button onClick={()=>setColor("orange")} className='px-4 py-1 outline-none shadow-lg rounded-full text-white  ' style={{backgroundColor: "orange"}}>ORANGE</button>

        </div>

      </div>

    </div>
  )
}

export default App