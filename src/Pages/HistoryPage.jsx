import React from 'react'

const HistoryPage = ({gameHistory})=> {

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4 text-center'> 🧾Game History </h2>
      {
        gameHistory.lenght === 0 ? (
            <p className='text-center text-gray-500'>No history yet</p>
        ):(
           <table className='w-full text-center border'>
               <thead className='bg-gray-100'>
                 <tr>
                    <th className='border px-4 py-2'>Round</th>
                    <th className='border px-4 py-2'>Selected</th>
                    <th className='border px-4 py-2'>Winner</th>
                    <th className='border px-4 py-2'>State</th>
                        <th className='border px-4 py-2'>Result</th>
                 </tr>
               </thead>
               <tbody>
                {
                  gameHistory.map((game,index)=>(
                    <tr key={index} className='text-center'>
                        <td className='border p-2'>{game.round}</td>
                         <td className='border p-2'>{game.selectedColor}</td>
v                        <td className='border p-2'>{game.stake}</td>
                        <td className='border p-2'>{game.winner}</td>
                        <td className={`border p-2 font-bold ${game.result ==="win"?"text-green-600":"text-red-600"}`}></td>

                    </tr>
                  ))
                }
               </tbody>
           </table>  
        )
      }
    </div>
  )
}

export default HistoryPage