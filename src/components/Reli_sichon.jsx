import React from 'react'
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_religion from './table/Table_religion';
function Reli_sichon() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
      <Table_religion/>
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default Reli_sichon
