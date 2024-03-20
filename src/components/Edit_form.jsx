import React, { useState, useEffect }   from 'react'
import { Link, useParams , useNavigate} from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import axios from 'axios';

function Edit_form() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState('');
  const [area, setArea] = useState('');
  const [story, setStory] = useState('');
  const [owner, setOwner] = useState('');
  const [informant, setInformant] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`http://10.200.10.197:4000/locations/${id}`);
              console.log(response);
              
              const data = response.data[0]; 
              console.log(data); 
              setName(data.name);
              setLat(data.location.lat);
              setLon(data.location.lon);
              setVillage(data.address.village);
              setDistrict(data.address.district);
              if (data.info.length > 0) {
                const infoData = data.info[0];
                setCategory(infoData.category);
                setDescription(infoData.description);
                setAge(infoData.age);
                setReligion(infoData.religion);
                setArea(infoData.area);
                setStory(infoData.story);
                setOwner(infoData.owner);
                setInformant(infoData.informant);
                setContact(infoData.contact);
            }
              
              
              
          } catch (err) {
              console.log(err);
          }
      };

      fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
        
        const updatedData = {
            name: name,
            location: {
                lat: parseFloat(lat) || 0,
                lon: parseFloat(lon) || 0
            },
            address: {
                village: village || '',
                district: district || ''
            },
            info: [{
                category: category || '',
                description: description || '',
                age: age || '',
                religion: religion || '',
                area: area || '',
                story: story || '',
                owner: owner || ''
            }],
            informant: informant || '',
            contact: contact || ''
        };
        
       
        const response = await axios.put(`http://10.200.10.197:4000/update/${id}`, updatedData);
        
   
        console.log('Update response:', response.data);

     
        navigate("/ListSichon");
    } catch (error) {
  
        console.error('Error updating data:', error);
       
    }
};






  return (
    <div>
    <form >
      <Card className='h-90 w-full'>
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
            <div className='mt-5 grid  grid-cols-4  grid-rows-1'>
              <div className='col-span-2 ml-1'>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อสถานที่</label>
                <input type='text'
                  value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อสถานที่"  />
              </div>
              <div className='col-sm-1 ml-1'>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ลองติจุด</label>
                <input  type='text' value={lon} onChange={(e) => setLon(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ลองติจุด" />
              </div>
              <div className='col-sm-1 ml-1'>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ละติจุด</label>
                <input value={lat} onChange={(e) => setLat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ละติจุด" />
              </div>
            </div>
            <div className='grid  grid-cols-3'>
              <div className=' ml-1 mt-1 '>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อชุมชล</label>
                <input value={village} onChange={(e) => setVillage(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="แหล่งชุมชล" />
              </div>
              <div className=' ml-1 mt-1'>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อตำบล</label>
                <input value={district} onChange={(e) => setDistrict(e.target.value)} id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ตำบล" />
              </div>
              <div className=' ml-1 mt-1'>
                <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ชื่อพื้นที่</label>
                <input value={area} onChange={(e) => setArea(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="พื้นที่" />
              </div>
            </div>
          </div>
        <hr className="my-3 border-blue-gray-50" />
        <div class="mt-2 grid  grid-cols-3  grid-rows-1">
            <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่หมวดหมู่</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)}  type='name' className=" form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="หมวดหมู่"/>
             </div>
             <div className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่อายุ/สมัย/ยุค</label>
            <input value={age} onChange={(e) => setAge(e.target.value)}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="อายุ/สมัย/ยุค" />
             </div>
             <div  className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ใส่ศาสนา</label>
            <input value={religion} onChange={(e) => setReligion(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ศาสนา"/>
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
            <textarea value={story} onChange={(e) => setStory(e.target.value)}   rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
        <div  class="mt-2 grid  grid-cols-2  grid-rows-1">
        <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">รายล่ะเอียด</label>
            <textarea id="info" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
        <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">คำอธิบาย</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
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
            <input value={owner} onChange={(e) => setOwner(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อ-สกุล"/>
             </div>
             <div className='ml-1'>
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ผู้แจ้ง</label>
            <textarea value={informant} onChange={(e) => setInformant(e.target.value)}  rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>
             <div  className='ml-1' >
            <label  className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">ช่องทางติดต่อ</label>
            <input  value={contact} onChange={(e) => setContact(e.target.value)}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ช่องทางติดต่อ"/>
             </div>
        </div>
        </div>
        </CardBody>
        <CardFooter>
        <div className='mb-8 float-end'>
        <Link to=" "
        class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit" 
        onClick={handleUpdate}
      >
        ตกลง
      </Link>
   
        </div>
        </CardFooter>
      </Card>
        </form>
    </div>
  )
}

export default Edit_form;
