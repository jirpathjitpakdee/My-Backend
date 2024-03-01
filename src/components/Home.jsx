import React from 'react'
import { Link } from 'react-router-dom';
import Slide_img from './Slide_img';
import sichon2 from "./assets/sichon2.jpg";
function Home() {
  
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sichon Heritage</span>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <ul className="hidden w-full md:flex md:w-auto md:order-1" >
        <li>
        <Link to="/Login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Login</Link>
        </li>
    </ul>
  </div>
   <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-hamburger">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Hightlight</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">แหล่งประวัติศาสตร์</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ภูมิปัญญาท่องถิ่น</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">แผนที่วัฒนธรรม</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">เกี่ยวกับ</a>
      </li>
      <li>
        <a href="#">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
        </a>
      </li>
    </ul>
  </div>
  </div>
</nav> 
    <div className='m-5 mt-[1rem] pl-5  '>
      <Slide_img/>
    </div>
    <div className='m-5  pl-5 bg-orange-200 h-[40rem]'>
      <div className='flex justify-center place-items-center h-[40rem] '>
      <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[90rem] h-[30em] flex-row ">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={sichon2}
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <h4
      class=" block mb-2 font-sans text-[3rem] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      มรดกทางวัฒนธรรมอำเภอสิชล
    </h4>
    <h6 class="block mb-4 font-sans text-[30px] antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
       ยินดิต้อนรับสู่มรดกทางวัฒนธรรมอำเภอสิชล
    </h6>
    <p class="block mb-8 font-sans text-[20px] antialiased font-normal leading-relaxed text-gray-700">
    อำเภอสิชล จังหวัดนครศรีธรรมราช เคยเป็นที่ตั้งของแหล่งอารยธรรมเก่าแก่
    พบหลักฐานจำนวนมากบ่งชี้ว่าบริเวณนี้เป็นที่ตั้งของชุมชลโบราณที่นับถือศาสนาพราหมณ์ฮินดูกลุ่มใหญ่ที่สุดในนครศรีธรรมราชตั้งแต่ประมาณพุทธศตวรรษที่
    11-14เป็นแหล่งทำเลที่มีการตั้งถิ่นฐานต่อเนื่องโดยกลุ่มชุมชลที่ผู้นับถือศาสนาพุทธมหายาน และพุทธเถรวาทตามลำดับ
    </p>
    <a href="#" class="inline-block  pl-[40rem] mt-[5rem]"><button
        class="flex    gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        อ่านเพิ่มเติม<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
      </div>
    </div>
    </div>
  )
}

export default Home
