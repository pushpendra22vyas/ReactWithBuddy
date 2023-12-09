import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader() {
  return (
    <div className='bg-[#c31e56e6] font-bold flex justify-center items-center h-15 p-2 w-full mx-auto text-white mt-2'>
     <ul className='flex justify-center'>
        <li className='mx-3 cursor-pointer hover:text-blue-300'><Link to="/crud/create">Create</Link></li>
        <li className='mx-3 cursor-pointer hover:text-blue-300'><Link to="/crud/table">Table</Link></li>
     </ul>
    </div>
  )
}

export default PageHeader