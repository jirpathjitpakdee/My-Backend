import React from 'react'
import Sidemenu from './Sidemenu'
import Navmenu from './Navmenu'
import Table_List from './Table_List'

const List_sichon = () => {
    
  return (
    <div>
      <div  className='flex '>
       <Sidemenu/>
      <div >
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
