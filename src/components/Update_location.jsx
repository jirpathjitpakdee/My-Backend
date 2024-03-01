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

function Update_location() {
    const [input, setInput] = useState({
        name: '',
        term: false
      })
    
      const handleChange = e => {
        const { target } = e
        const { name } = target
        const value = name === 'term' ? target.checked : target.value
    
        setInput({
          ...input,
          [name]: value
        })
      }
    
      const onSubmit = e => {
        e.preventDefault()
    
        console.log('submit value', input)
    
    
      }
      const [showAlert, setShowAlert] = useState(false);
    
        const handleButtonClick = () => {
            create(); // Call your create function here
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Adjust the time to your preference
        };
    
      function create() {
        const url = 'http://192.168.10.117:4000/create';
        const name = document.getElementById('name');
        const lat = document.getElementById('lat');
        // const lon = document.getElementById('lon');
        const category = document.getElementById('category');
        const age = document.getElementById('age');
        const religion = document.getElementById('religion');
        const area = document.getElementById('area');
        // const story = document.getElementById('story');
        const owner = document.getElementById('owner');
        const informant = document.getElementById('informant');
        const contact = document.getElementById('contact');
        const date = document.getElementById('date');
        const village = document.getElementById('village');
        const district = document.getElementById('district');
        const description = document.getElementById('description');
        const data = {
            name: name.value,
            lat: parseFloat(lat.value),
            // lon: parseFloat(lon.value),
            village: parseInt(village.value),
            district: district.value,
            info: null,
            media: null,
            category: category.value,
            description: description.value,
            age: parseInt(age.value),
            // story: story.value,
            religion: religion.value,
            area: area.value,
            date: date.value,
            informant: informant.value,
            owner: owner.value,
            contact: contact.value,
            imageName: null,
            imageUrl: null,
            audioName: null,
            audioUrl: null,
            videoName: null,
            videoUrl: null
        };
    
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('Document created successfully');
                    console.log(JSON.stringify(data));
                    // window.location.href = `index.html`;
                } else {
                    console.error('Error creating document');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

  return (
    <div>
    <form  onSubmit={onSubmit}>
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
              <Input  label="ชื่อสถานที่" id ="name" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            ประเภท
            <div className="mt-4 w-[30rem]">
              <Input type='name' className='form-control' onChange={handleChange} label="ประเภท" id = "category" />
           </div>
          </Typography>
        </div>
        <div className='mt-4'>
        <Typography variant="h6" color="blue-gray">
              รายละเอียด
          </Typography>
        <textarea  id="description" rows="4" class="mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ใส่รายละเอียด..."></textarea>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-3'>
        <Typography variant="h6" color="blue-gray" >
            พิกัด
            <div className="mt-4 w-50">
              <Input label="พิกัด" id="lat"  />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            หมู่บ้าน
            <div className="mt-4 w-50">
              <Input label="หมู่บ้าน" id = "village" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            ตำบล
            <div className="mt-4 w-50">
              <Input label="ตำบล" id ="district" />
           </div>
          </Typography>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-3'>
        <Typography variant="h6" color="blue-gray" >
            แหล่งชุมชล
            <div className="mt-4 w-50">
              <Input label="แหล่งชุมชล" id ="area" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            อายุ/สมัย/ยุค
            <div className="mt-4 w-50">
              <Input label="อายุ/สมัย/ยุค" id="age" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            ศาสนา
            <div className="mt-4 w-50">
              <Input label="ศาสนา" id ="religion" />
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
              <Input label="ผู้ครอบครอง/ผู้ดูแล" id = "owner"/>
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
          <Text_edit id ="story"/>
          </div>
          <div className='mt-4'>
          <Typography variant="h5" color="blue-gray" >
             เรื่องเล่าที่เกี่ยวข้อง
          </Typography>
          <div className='mt-4'>
          <Text_edit id ="story"/>
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
              <Input label="ขื่อ-สกุล" id= "informant" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            การติดต่อผู้ให้ข้อมูล
            <div className="mt-4 w-50">
              <Input label="การติดต่อผู้ให้ข้อมูล" id = "contact" />
           </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" >
            วันที่เก็บข้อมูล
            <div className="mt-4 w-50">
              <Input  label="วันที่เก็บข้อมูล" id ="date" />
           </div>
          </Typography>
        </div>
      </CardBody>
      <hr className="my-2 border-blue-gray-50" />
     <CardFooter>
      <div className='mb-8 float-end'>
      <button 
      class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit" onClick={handleButtonClick}
    >
      ตกลง
    </button>
    {showAlert && (
              <div className="fixed inset-x-0 top-0 flex items-end justify-right px-4 py-6 justify-end">
                  <div className="max-w-sm w-full shadow-lg rounded px-4 py-3 rounded relative bg-green-400 border-l-4 border-green-700 text-white">
                      <div className="p-2">
                          <div className="flex items-start">
                              <div className="ml-3 w-0 flex-1 pt-0.5">
                                  <p className="text-sm leading-5 font-medium">
                                      Success
                                  </p>
                              </div>
                              <div className="ml-4 flex-shrink-0 flex">
                                  <button
                                      className="inline-flex text-white transition ease-in-out duration-150"
                                      onClick={() => setShowAlert(false)}
                                  >
                                      <svg
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
     </CardFooter>
    </div>
    
  </Card>
    </form>
 </div>
  )
}

export default Update_location
