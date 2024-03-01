import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Table_List() {
  
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.112.1.112:4000/locations');
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const numbers =  Array.length

  
  return (

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className='w-50 bg-white rounded p-3'>
  <Link to="/FormSichon" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">เพิ่มพื้นที่/สถานที่</Link>
  </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class=" h-[5rem] w-[50rem]text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    สถานที่
                </th>
                <th scope="col" class="px-6 py-3">
                    ละติจุด
                </th>
                <th scope="col" class="px-6 py-3">
                    ลองจิจูด
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {locations.slice(0,14).map(location => (
            <tr key={location._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4" >{(location._id)}</td>
              <td class="px-6 py-4" >{location.name || 'ไม่ระบุ'}</td>
              <td class="px-6 py-4" >{location.location ? location.location.lat || 'ไม่ระบุ' : 'ไม่ระบุ'}</td>
              <td class="px-6 py-4" >{location.location ? location.location.lon || 'ไม่ระบุ' : 'ไม่ระบุ'}</td>
              <td>
                 <Link to={`/Edit/${location._id}`} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</Link>
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
              </td>
              {/* Render additional fields if needed */}
            </tr>
          ))}

        </tbody>
       
    </table>
  
</div>

  )
}

export default Table_List

