import React from 'react'

const HowToPlay =() =>{
  return (

    <div className='p-6 max-2xl mx-auto'>
       <h2 className='text-2xl font-bold text-center mb-4'>🎮 How to Play</h2>
       <div className="space-y-4 text-lg text-gray-700">
        <p>Welcome to <strong>Stake Play</strong>! Here's how the game works: </p>
        <ol className='list-decimal pl-5 space-y-2'>
           <li>Choose a color: <strong>Red</strong> <strong>Green</strong>or <strong>Blue</strong> </li>
           <li>Select a coin amount you want to stake</li>
           <li>2-minute round will start and countdown begins</li>
           <li>At the end of the round, one color win randomly</li>
           <li>If your color matches the winner,you win! otherwise , you lose </li>
        </ol>
        <p>Your game result are saved automatically and can be seen on the <strong>History</strong> page.</p>
        <p className='text-center text-yellow-600 font-semibold'>Good luck and have fun 🎉</p>
       </div>
    </div>
  )
}

export default HowToPlay