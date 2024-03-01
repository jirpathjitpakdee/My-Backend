import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className='pl-[35rem] ps-[36rem] mt-[15rem] sticky top-0 '>
      <div
    className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20 w-[45rem]">
    <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
      Sichon Heritage
    </h3>
  </div>
      <div className="relative  bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row ">
        
  <div
    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    
  </div>
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase text-center">
      เข้าสู่ระบบจัดการเว็บไซต์
    </h6>
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white"></h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">บัญชีผู้ใช้</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="บัญชีผู้ใช้" required />
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            
        </div>
        <div classNameName='mt-1'>
        <Link to={"/ListSichon"}>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button></Link>
        
        </div>
       
    </form>
  </div>
</div>  
    </div>
    </div>
  )
}

export default Login
