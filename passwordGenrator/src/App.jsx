import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // refs
  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()~"

    for (let i = 1; i <= length; i++) {
      const iChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(iChar);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyFn = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(passwordRef.current?.value);
  }

  return (
    <>
      <div className='my-3 w-full p-3 max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-500'>
        <h1 className='text-4xl text-center text-white mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-sm overflow-hidden '>
          <input type="text" value={Password} className='text-gray-400 outline-none w-full py-1 px-3' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0' onClick={copyFn}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)} />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            value={numberAllowed}
            id='isnumber'
            onClick={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor='isnumber'>Number</label>
          <input
            type="checkbox"
            value={charAllowed}
            id='ischar'
            onClick={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor='ischar'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
