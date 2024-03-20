import React from 'react';
import SlideImg from './Slide_img';
import sichon2 from "./assets/sichon2.jpg";
import NavMenuHome from './Navmenu_home';

function Home() {
  return (
    <div>
      <nav>
        <NavMenuHome />
      </nav>
      <div className='m-5 mt-[1rem]'>
        <SlideImg />
      </div>
      <div className='m-5 pl-5 pr-5 rounded-2xl bg-orange-200 h-[42rem] max-w-[140rem]'>
        <div className='flex justify-center items-center h-[42rem]'>
          <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[90rem] h-[30em] flex-row">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={sichon2} alt="Sichon2" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h4 className="block mb-2 font-sans text-[3rem] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                มรดกทางวัฒนธรรมอำเภอสิชล
              </h4>
              <h6 className="block mb-4 font-sans text-[30px] antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                ยินดีต้อนรับสู่มรดกทางวัฒนธรรมอำเภอสิชล
              </h6>
              <p className="block mb-8 font-sans text-[20px] md:max-xl:flex antialiased font-normal leading-relaxed text-gray-700">
                อำเภอสิชล จังหวัดนครศรีธรรมราช เคยเป็นที่ตั้งของแหล่งอารยธรรมเก่าแก่
                พบหลักฐานจำนวนมากบ่งชี้ว่าบริเวณนี้เป็นที่ตั้งของชุมชลโบราณที่นับถือศาสนาพราหมณ์ฮินดูกลุ่มใหญ่ที่สุดในนครศรีธรรมราชตั้งแต่ประมาณพุทธศตวรรษที่
                11-14เป็นแหล่งทำเลที่มีการตั้งถิ่นฐานต่อเนื่องโดยกลุ่มชุมชลที่ผู้นับถือศาสนาพุทธมหายาน และพุทธเถรวาทตามลำดับ
              </p>
              <a href="#read-more" className="inline-block pl-[40rem] mt-[5rem]">
                <button className="flex gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                  อ่านเพิ่มเติม
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
