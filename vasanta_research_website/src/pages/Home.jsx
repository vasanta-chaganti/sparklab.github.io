import { useState } from 'react'
import './Home.css'

function App() {
  return (
    <>
      <img id='welcomeImage' src='https://static.vecteezy.com/system/resources/previews/001/971/958/non_2x/blue-abstract-line-art-background-with-text-placeholder-vector.jpg' alt='placeholder' width={'100%'} height={'30%'} />
      <div className='introduction'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div className='updates'>
        <div>
          <h2>Posts</h2>
        </div>

        <div>
          <h2>Papers</h2>
        </div>
      </div>
    </>
  )
}

export default App
