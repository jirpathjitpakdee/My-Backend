import React, { useState }   from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

function New_form() {
    const [input, setInput] = useState({
        name: '',
        term: false
      })
    
      const handleChange = (e) => {
        const { target } = e;
        const { name } = target;
        const value = name === 'term' ? target.checked : target.value;
    
        setInput({
          ...input,
          [name]: value,
        });
      };
    
    
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
        // const date = document.getElementById('date');
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
            // date: date.value,
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
        <form onSubmit={onSubmit}>
        <Card className='h-90 w-full' >
        <CardHeader
        shadow={false}
        variant="gradient"
        color="gray"
        className="pt-5 pl-8 grid h-20  place-items-start">
             <Typography variant="h3" color="white">
          แบบฟอร์มนำเข้าข้อมูล
        </Typography>
        </CardHeader>
        <CardBody>
           <hr className="my-2 border-blue-gray-50" />
      <div>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h3" color="blue-gray" >
              ส่วนที่ 1: ข้อมูลสถานที่ในแหล่งชุมชล
            </Typography>
          </div>
        </div>
        
        </CardHeader>
        <hr className="my-2 border-blue-gray-50" />
            <div class="mt-5 grid  grid-cols-4  grid-rows-1">
            <div className='col-span-2 ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อสถานที่</label>
            <input type='text'
             id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อสถานที่" required />
             </div>
             <div className='col-sm-1 ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ลองติจุด</label>
            <input  id="lat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ลองติจุด" />
             </div>
             <div className='col-sm-1 ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ละติจุด</label>
            <input   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ละติจุด"/>
             </div>
            </div>
            <div className='grid  grid-cols-3'>
             <div className=' ml-1 mt-1 '>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อชุมชล</label>
            <input  id="village" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="แหล่งชุมชล"/>
             </div>
             <div className=' ml-1 mt-1'>
            <label  clasName="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อตำบล</label>
            <input  id="district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ตำบล" />
             </div>
             <div className=' ml-1 mt-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อพื้นที่</label>
            <input  id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="พื้นที่" />
             </div>
            </div>
           </div> 
        <hr className="my-3 border-blue-gray-50" />
        <div class="mt-2 grid  grid-cols-3  grid-rows-1">
            <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่หมวดหมู่</label>
            <input onChange={handleChange} type='name'id="category" className=" form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="หมวดหมู่"/>
             </div>
             <div className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่อายุ/สมัย/ยุค</label>
            <input  id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="อายุ/สมัย/ยุค" />
             </div>
             <div  className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ศาสนา</label>
            <input  id="religion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ศาสนา"/>
             </div>
        </div>
        <hr className="my-4 border-blue-gray-50" />
      <div>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h3" color="blue-gray" >
              ส่วนที่ 2: เรื่องเล่าชุมชล
            </Typography>
          </div>
        </div>
        </CardHeader>
        <hr className="my-2 border-blue-gray-50" />
        <div>
        <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">เรื่องเล่า</label>
            <textarea id="story" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
        <div  class="mt-2 grid  grid-cols-2  grid-rows-1">
        <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">รายล่ะเอียด</label>
            <textarea id="info" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
        <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">คำอธิบาย</label>
            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
        </div>
        
        </div>
        <hr className="my-4 border-blue-gray-50" />
      <div>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h3" color="blue-gray" >
              ส่วนที่ 3: ผู้ให้ข้อมูล
            </Typography>
          </div>
        </div>
        </CardHeader>
        <hr className="my-2 border-blue-gray-50" />
        </div>
        <div class="mt-2 grid  grid-cols-3  grid-rows-1">
            <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ผู้ให้ข้อมูล</label>
            <input  id="owner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อ-สกุล"/>
             </div>
             <div className='ml-1' >
            <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ผู้แจ้ง</label>
            <input  id="informant"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ผู้แจ้ง" />
             </div>
             <div  className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ช่องทางติดต่อ</label>
            <input  id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ช่องทางติดต่อ"/>
             </div>
        </div>
        </div>
        </CardBody>
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
      </Card>
        </form>
    </div>
  )
}

export default New_form;
