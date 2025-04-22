import React, { createContext, useCallback, useContext, useState } from 'react'

const LightContext = createContext();

const App = () => {
  const [action, setAction] = useState(false);

  return (
    <>  
      <LightContext.Provider value={{
        action:action,
        setAction:setAction
      }}>
        <Light />
      </LightContext.Provider>
    </>
  )
}

const Light = ()=>{
  return (
    <div className='h-screen w-screen bg-gray-800 text-white flex flex-col justify-center items-center'>
          <Bulb />
          <LightSwitch />
    </div>
  )
}

const Bulb = () => {
  const {action} = useContext(LightContext);
  return (
    <h1>bulb {action?"on":"off"}</h1>
  )
}

const LightSwitch = ()=>{
  const {action,setAction} = useContext(LightContext)
  return (
    <button className='cursor-pointer border-2 p-4' onClick={()=> setAction(!action) }>Toggle Bulb</button>
  )
}

export default App