/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg"
import { IoIosNotifications } from "react-icons/io"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"


const Navbar = ({setIsOpen, open}) => {
  return (
    <div className="p-5 flex items-center justify-between border-b border-black">
        <div className="flex gap-5 items-center">
            <MdMenu onClick={() => setIsOpen(!open) } className="text-2xl mt-auto cursor-pointer" />
            <h1 className="text-2xl font-semibold">Tajbir islam</h1>
        </div>
        <div className="flex gap-5 items-center">
            <Link to="/profile"><CgProfile className="text-2xl mt-auto cursor-pointer" /></Link>
            <IoIosNotifications className="text-2xl mt-auto cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar