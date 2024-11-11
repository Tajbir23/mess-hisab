import { Outlet } from "react-router-dom"
import Navbar from "../page/Navbar/Navbar"
import { useState } from "react"
import Sidebar from "../component/Sidebar"
import { useGetUserQuery } from "../redux/services/userApi"


const HomeLayout = () => {
  const [open, setIsOpen] = useState(false)
  const {currentData} = useGetUserQuery()
  console.log(currentData)
  return (
    <div className="relative">
        {currentData.user.status === "pending" | currentData.user.status === "block" ? <div className="fixed h-screen w-screen flex flex-col items-center justify-center bg-black z-50 text-white " >
          <h1 className="text-2xl font-semibold">Welcome {currentData?.user?.name}</h1>
          <p className="text-xl font-semibold break-words">Your account is pending, please wait for approval</p>
        </div> : currentData.user.status === "confirmed" && <>
        <Navbar setIsOpen={setIsOpen} open={open} />
        <div className="p-5">
            <Outlet />
        </div>
        {open && <Sidebar setIsOpen={setIsOpen} className="fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white" />}
        </>}
        
    </div>
  )
}

export default HomeLayout