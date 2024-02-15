import React from 'react';
import Sidemenu from './Sidemenu';
import Navmenu from './Navmenu';
import Table_List from './table/Table_List';

const List_sichon = () => {
    
  return (
    <div>
      <div  className='flex '>
       <Sidemenu/>
      <div className='w-[100rem]'>
      <Navmenu/>
      <div className=' px-[10rem] mt-[5rem] mx-6  '>
      <Table_List/>
      </div>
      </div>
      
    
    </div>

    </div>
  )
}

export default List_sichon
