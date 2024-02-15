import React from 'react'
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_village from './table/Table_village';
function Vill_sichon() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
     <Table_village />
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default Vill_sichon
