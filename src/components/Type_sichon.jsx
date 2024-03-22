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
    <div className='  mt-[2rem]  '>
      

<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <ul class="flex flex-wrap text-xl font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
      <li class="me-2">
          <h4 class="inline-block p-4  rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">รายชื่อสถานที่</h4>
      </li>
  </ul>
  <div id="defaultTabContent">
      <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
      </div>
      <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
      <Table_type/>
      </div>
  </div>
</div>

    
    </div>
    </div>
    
  
  </div>

  </div>
  )
}

export default Type_sichon
