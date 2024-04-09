import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const Card = () => {
  return (
    <>
        <div className=' relative  w-60 p-5 h-72 rounded-[50px] text-white  overflow-hidden bg-zinc-900/90 '>
    
         <FaFileAlt/>
       <p className='text-sm mt-5  font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quas culpa eveniet blanditiis!</p>
          
          <div className=' footer absolute bottom-0  w-full h-18 left-0'>
            <div className='flex items-center justify-between   px-5  '>
                 <h5>.4mb </h5>
                 <MdOutlineFileDownload/>
            </div>
                <div className=' tag  bg-sky-300 flex items-center justify-center   w-full    py-4 '>
                     <h4 className=' font-semibold  '>Download Now </h4>
                     </div>
          </div>
      </div>
    </>
  )
}

export default Card