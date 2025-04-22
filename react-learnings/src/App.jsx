import React, { createContext, useCallback, useContext, useState } from 'react'

const LightContext = createContext();

const LightProvider = ({children}) => {
  const [action, setAction] = useState(false);
  return (
    <LightContext.Provider value={{
      action:action,
      setAction:setAction
    }}>
      {children}
    </LightContext.Provider>
  )
}

const App = () => {

  return (
    <>  
      <LightProvider >
        <Light />
      </LightProvider>
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
    <h1 className='text-3xl'>Bulb {action?"on":"off"}</h1>
  )
}

const LightSwitch = ()=>{
  const {action,setAction} = useContext(LightContext)
  return (
    <button className='cursor-pointer border-2 p-4 rounded-2xl mt-4 hover:scale-100 z-5' onClick={()=> setAction(!action) }>Toggle Bulb</button>
  )
}

export default App