import React from 'react'
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_status from './table/Table_status';
function Status_sichon() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
      <Table_status/>
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default Status_sichon
