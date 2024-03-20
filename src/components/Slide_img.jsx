import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import sichon1 from "./assets/sichon1.jpg";

function Slide_img() {

    const slides = [
        {
          url: sichon1,
          text: 'ประวัติศาสตร์ท้องถิ่น',
          additionalText: 'ถ้ำเขาพรงตะวันออก',

        },
        {
            url: sichon1,
            additionalText: 'Additional text if needed 2',
  
          },
          {
            url: sichon1,
            additionalText: 'Additional text if needed 3',
  
          },
    
          {
            url: sichon1,
            additionalText: 'Additional text if needed 4',
  
          },
          {
            url: sichon1,
            additionalText: 'Additional text if needed 5',
  
          },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
        <div>
            <div className='max-w-[2100px] h-[900px] w-full m-auto py-16  relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
    >
        <div className="absolute top-0 left-0 w-full text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="mt-[15rem]">
          <h4 className=" text-lg">{slides[currentIndex].text}</h4>
          </div>
          <p className=" text-[5rem]">{slides[currentIndex].additionalText}</p>
          <button type="button" class="mt-2 text-gray-900 bg-white border border-gray-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">อ่านเพิ่มเติม</button>        </div>
    </div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
        </div>
    
  )
}

export default Slide_img
