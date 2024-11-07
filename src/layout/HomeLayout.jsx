import { Outlet } from "react-router-dom"
import Navbar from "../page/Navbar/Navbar"
import { useState } from "react"
import Sidebar from "../component/Sidebar"


const HomeLayout = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <div className="relative">
        <Navbar setIsOpen={setIsOpen} open={open} />
        <div className="p-5">
            <Outlet />
        </div>
        {open && <Sidebar setIsOpen={setIsOpen} className="fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white" />}
    </div>
  )
}

export default HomeLayout