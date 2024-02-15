import React from 'react';
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_type from './table/Table_type';
function Type_sichon() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
      <Table_type/>
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default Type_sichon
