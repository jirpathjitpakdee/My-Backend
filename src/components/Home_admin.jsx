import React from 'react'
import Sidemenu from './Sidemenu'
import Navmenu from './Navmenu'

function Home_admin() {
  return (
    <div>
      <div  className='flex '>
       <Sidemenu/>
      <div className='w-[100rem]'>
      <Navmenu/>
      </div>
      
    </div>
   

    </div>
  )
}

export default Home_admin
