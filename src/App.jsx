import { useState } from 'react'
import './App.css'

function App() {
  
  const [wordCount, setWordCount] = useState(0)
  const [letterCount, setLetterCount] = useState(0)

  function handleChange(txt) {
    setWordCount(txt.trim().split(/\s+/).filter(word => word !== '').length)
    setLetterCount(txt.split(' ').join('').length)
  }

  return (
    <>
      <h1 className='text-center font-bold text-2xl p-2 mt-20'>Words and Letter Counter</h1>
      <div className='flex flex-col justify-center items-center p-2'>
        <textarea
         rows="10" 
         cols="50" 
         className='border-2 border-black rounded-lg indent-2'
         placeholder='Enter here..'
         onChange={(e) => handleChange(e.target.value)}
        
        >
        </textarea>
        {wordCount > 0 && 
          <h2 className='p-2 text-xl float-left'><strong>Word Count:</strong>{wordCount}</h2>
        }
        {letterCount > 0 &&
          <h2 className='p-2 text-xl float-left'><strong>Letter Count:</strong>{letterCount}</h2>
        }
      </div>
    </>
  )
}

export default App
