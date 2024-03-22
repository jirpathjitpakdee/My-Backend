import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { HiArrowSmRight,  HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { BsTable , BsBank} from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { FaEarthAmericas } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Newbar() {
  const menus = [
    { name: "แบบฟอร์ม", link: "/FormSichon", icon: MdOutlineDashboard },
    {
      name: "พื้นที่/สถานที่",
      link: "/FormSichon",
      icon: BsTable,
      subMenus: [
        { name: "แบบฟอร์ม", link: "/FormSichon" },
        { name: "รายการ", link: "/ListSichon" },
        { name: "ประเภท", link: "/TypeSichon" },
        { name: "แหล่งชุมชล", link: "/VillSichon" },
        { name: "ศาสนา", link: "/ReliSichon" },
        { name: "พื้นที่ลุ่มแม่น้ำ", link: "/RiverSichon" },
        { name: "สถานะ", link: "/StatusSichon" },
      ],
    },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const toggleSubMenu = (index) => {
    setSubMenuOpen({ ...subMenuOpen, [index]: !subMenuOpen[index] });
  };

  return (
    <section className="flex gap-6">
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16 hidden sm:block"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <div key={i} className="relative">
            <div
              onClick={() => toggleSubMenu(i)}
              className={`${
                menu.margin && "mt-5"
              } group flex items-center text-[20px]  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </div>
            {menu.subMenus && subMenuOpen[i] && (
              <div
                className={`${
                  menu.margin && "mt-5"
                } group  items-center text-[20px]  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                {menu.subMenus.map((subMenu, j) => (
                  <Link
                    key={j}
                    to={subMenu.link}
                    className= {`block py-2 px-4 hover:bg-gray-700 whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {subMenu.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="m-3 text-xl text-gray-900 font-semibold">react</div>
  </section>
  )
}
