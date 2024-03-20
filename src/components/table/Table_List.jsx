import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Table_List() {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust the number of items per page as needed
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.200.10.197:4000/locations');
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteLocation = (id) => {
    axios.delete(`http://10.200.10.197:4000/delete/locations/${id}`)
      .then((res) => {
        console.log(res);
        // Refresh the data after successful deletion
        fetchData();
      })
      .catch((err) => console.log(err));
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  return (

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className='w-50 bg-white rounded p-3'>
  <Link to="/FormSichon" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">เพิ่มพื้นที่/สถานที่</Link>
  </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" h-[5rem] w-[50rem]text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    #
                </th>
                <th scope="col" className="px-6 py-3">
                    สถานที่
                </th>
                <th scope="col" className="px-6 py-3">
                    ละติจุด
                </th>
                <th scope="col" className="px-6 py-3">
                    ลองจิจูด
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((location, index) => (
            <tr key={location._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4" >{indexOfFirstItem + index + 1}</td>
              <td className="px-6 py-4" >{location.name || 'ไม่ระบุ'}</td>
              <td className="px-6 py-4" >{location.location ? location.location.lat || 'ไม่ระบุ' : 'ไม่ระบุ'}</td>
              <td className="px-6 py-4" >{location.location ? location.location.lon || 'ไม่ระบุ' : 'ไม่ระบุ'}</td>
              <td>
                 <Link to={`/Edit/${location._id}`} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</Link>
              <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => deleteLocation(`${location._id}`)} >Delete</button>
              </td>
              {/* Render additional fields if needed */}
            </tr>
          ))}

        </tbody>
       
    </table>
    <ul className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(locations.length / itemsPerPage) }, (_, index) => (
          <li key={index} className="mx-1">
            <button
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              } hover:bg-blue-700 hover:text-white px-3 py-2 rounded-lg focus:outline-none`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
  
</div>

  )
}

export default Table_List;
