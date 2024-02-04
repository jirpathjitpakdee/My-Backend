import React from 'react'
import Text_edit from './Text_edit';



import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Input,
    CardFooter,
   
  } from "@material-tailwind/react";
function Add_form() {
  return (
    <Card className='h-90 w-full'>
      <div>
      <CardHeader
        shadow={false}
        variant="gradient"
        color="gray"
        className="pt-5 pl-8 grid h-20  place-items-start"
      >
        <Typography variant="h3" color="white">
          แบบฟอร์มนำเข้าข้อมูล
        </Typography>
      </CardHeader>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <div>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" >
              ส่วนที่ 1: ข้อมูลสถานที่
            </Typography>
          </div>
        </div>
        
        </CardHeader>
        <CardBody>
          <div className='grid grid-cols-2 gap-2'>
          <Typography variant="h6" color="blue-gray" >
              ชื่อสถานที่
              <div className="mt-4 w-[30rem]">
                <Input label="ชื่อสถานที่" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              ประเภท
              <div className="mt-4 w-[30rem]">
                <Input label="ประเภท" />
             </div>
            </Typography>
          </div>
          <div className='mt-4'>
          <Typography variant="h6" color="blue-gray">
                รายละเอียด
            </Typography>
          <textarea  id="message" rows="4" class="mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ใส่รายละเอียด..."></textarea>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-3'>
          <Typography variant="h6" color="blue-gray" >
              พิกัด
              <div className="mt-4 w-50">
                <Input label="พิกัด" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              หมู่บ้าน
              <div className="mt-4 w-50">
                <Input label="หมู่บ้าน" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              ตำบล
              <div className="mt-4 w-50">
                <Input label="ตำบล" />
             </div>
            </Typography>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-3'>
          <Typography variant="h6" color="blue-gray" >
              แหล่งชุมชล
              <div className="mt-4 w-50">
                <Input label="แหล่งชุมชล" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              อายุ/สมัย/ยุค
              <div className="mt-4 w-50">
                <Input label="อายุ/สมัย/ยุค" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              ศาสนา
              <div className="mt-4 w-50">
                <Input label="ศาสนา" />
             </div>
            </Typography>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-3'>
          <Typography variant="h6" color="blue-gray" >
              พื้นที่ลุ่มแม่น้ำ
              <div className="mt-4 w-50">
                <Input label="พื้นที่ลุ่มแม่น้ำ" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              ผู้ครอบครอง/ผู้ดูแล
              <div className="mt-4 w-50">
                <Input label="ผู้ครอบครอง/ผู้ดูแล" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              สถานะ
              <div className="mt-4 w-50">
                <Input label="สถานะ" />
             </div>
            </Typography>
          </div>
          <div className='mt-4'>
          <Typography variant="h6" color="blue-gray" >
              ภาพ/วิดิโอ/เสียง
              <div className="mt-4 w-[30rem]">
                <Input label="Link" />
             </div>
            </Typography>
          </div>
        </CardBody>
        <hr className="my-2 border-blue-gray-50" />
        <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" >
              ส่วนที่ 2: เรื่องเล่าและประเพณี
            </Typography>
          </div>
        </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" >
               เรื่องเล่าประเพณี
            </Typography>
            <div className='mt-4'>
            <Text_edit/>
            </div>
            <div className='mt-4'>
            <Typography variant="h5" color="blue-gray" >
               เรื่องเล่าที่เกี่ยวข้อง
            </Typography>
            <div className='mt-4'>
            <Text_edit/>
            </div>
            </div>
        </CardBody>
        <hr className="my-2 border-blue-gray-50" />
        <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" >
              ส่วนที่ 3: ผู้ให้ข้อมูล
            </Typography>
          </div>
        </div>
        </CardHeader>
        <CardBody>
        <div className='mt-4 grid grid-cols-3 gap-3'>
          <Typography variant="h6" color="blue-gray" >
              ผู้ให้ข้อมูล
              <div className="mt-4 w-50">
                <Input label="ขื่อ-สกุล" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              การติดต่อผู้ให้ข้อมูล
              <div className="mt-4 w-50">
                <Input label="การติดต่อผู้ให้ข้อมูล" />
             </div>
            </Typography>
            <Typography variant="h6" color="blue-gray" >
              วันที่เก็บข้อมูล
              <div className="mt-4 w-50">
                <Input label="วันที่เก็บข้อมูล" />
             </div>
            </Typography>
          </div>
        </CardBody>
        <hr className="my-2 border-blue-gray-50" />
       <CardFooter>
        <div className='mb-8 float-end'>
        <button
        class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        ตกลง
      </button>
        </div>
       </CardFooter>
      </div>
      
    </Card>
  )
}

export default Add_form
