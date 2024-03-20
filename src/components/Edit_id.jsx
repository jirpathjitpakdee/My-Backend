import React from 'react'
import Sidemenu from './Sidemenu'
import Navmenu from './Navmenu'
import Edit_form from './Edit_form'

function Edit_id() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
     <Edit_form/>
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default Edit_id
