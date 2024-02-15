import React from 'react'
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_river from './table/Table_river';
function River_sichon() {
  return (
    <div>
    <div  className='flex '>
     <Sidemenu/>
    <div className='w-[100rem]'>
    <Navmenu/>
    <div className=' px-[10rem] mt-[5rem] mx-6  '>
      <Table_river/>
    </div>
    </div>
  
  </div>

  </div>
  )
}

export default River_sichon
