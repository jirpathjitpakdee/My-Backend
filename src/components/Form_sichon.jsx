import React from 'react'
import Sidemenu from './Sidemenu'
import Navmenu from './Navmenu'

import New_form from './New_form'

function form_sichon() {
  return (
    <div>
      <div  className='flex '>
       <Sidemenu/>
      <div className='w-[100rem]'>
      <Navmenu/>
      <div className=' px-[10rem] mt-[5rem] mx-6  '>
        <New_form/>
      </div>
      </div>
    
    </div>

    </div>
  )
}

export default form_sichon
