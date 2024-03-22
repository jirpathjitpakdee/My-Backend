import React from 'react'
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight,  HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { BsTable , BsBank} from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { FaEarthAmericas } from "react-icons/fa6";

const Sidemenu = () => {
    
    return (
      <div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example " className='sticky top-0 h-screen w-full w-[20rem]'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse icon={BsTable} label="พื่นที่/สถานที่">
            <Sidebar.Item ><Link to="/FormSichon">แบบฟอร์ม</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/ListSichon">รายการ</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/TypeSichon">หมวดหมู่</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/VillSichon">แหล่งชุมชล</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/ReliSichon">ศาสนา</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/RiverSichon">พื้นที่ลุ่มแม่น้ำ</Link></Sidebar.Item>
            <Sidebar.Item ><Link to="/StatusSichon">สถานะ</Link></Sidebar.Item>
          </Sidebar.Collapse>
          <hr className="my-2 border-blue-gray-50" />
          <Sidebar.Collapse icon={HiUser} label="จัดการผู้ใช้งาน">
            <Sidebar.Item href="#">ผู้ใช้งาน</Sidebar.Item>
          </Sidebar.Collapse>
          <hr className="my-2 border-blue-gray-50" />
          <Sidebar.Collapse icon={LuNewspaper} label="จัดการรายงาน">
            <Sidebar.Item href="#">รายงาน</Sidebar.Item>
          </Sidebar.Collapse>
          <hr className="my-2 border-blue-gray-50" />
          <Sidebar.Item  icon={FaEarthAmericas}>
          <Link to="/">ไปยังหน้าเว็บไซต์หลัก</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    
    </div>
   
    );
}

export default Sidemenu
