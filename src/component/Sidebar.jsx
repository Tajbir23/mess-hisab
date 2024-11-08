/* eslint-disable react/prop-types */

import { FaHome, FaUsers } from "react-icons/fa"
import { MdOutlineMenuOpen, MdOutlinePayments } from "react-icons/md"
import { Link } from "react-router-dom"

const Sidebar = ({className = "", setIsOpen}) => {
  return (
    <div className={`${className}`}>
        <div className="flex justify-between items-center p-5">
            <h1 className="text-2xl">Menu</h1>
            <MdOutlineMenuOpen onClick={() => setIsOpen(false)} className="text-2xl mt-auto cursor-pointer" />
        </div>
        <div className="p-5">
            <ul className="flex flex-col gap-5">
                <Link to="/" className="flex gap-5 items-center hover:bg-green-700 p-2 rounded-md">
                    <FaHome className="text-2xl mt-auto cursor-pointer" />
                    <p>Home</p>
                </Link>
                <Link to="/members" className="flex gap-5 items-center hover:bg-green-700 p-2 rounded-md">
                    <FaUsers className="text-2xl mt-auto cursor-pointer" />
                    <p>Members</p>
                </Link>
                <Link to="/my-payments" className="flex gap-5 items-center hover:bg-green-700 p-2 rounded-md">
                    <MdOutlinePayments className="text-2xl mt-auto cursor-pointer" />
                    <p>My payments</p>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar