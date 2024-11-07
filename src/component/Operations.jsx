import { FaWallet } from "react-icons/fa"
import { FaMoneyBill1Wave } from "react-icons/fa6"
import { FcViewDetails } from "react-icons/fc"
import { Link } from "react-router-dom"


const Operations = () => {
  return (
    <div className="mt-5 border-0 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="p-5">
            <ul className="grid grid-cols-3 gap-10">
                <Link to="/meal-details" className="flex flex-col items-center gap-2 cursor-pointer">
                    <FcViewDetails className="text-2xl" />
                    <p className="">Meal details</p>
                </Link>

                <Link to="/bazar-details" className="flex flex-col items-center gap-2 cursor-pointer">
                    <FcViewDetails className="text-2xl" />
                    <p>Bazar details</p>
                </Link>
                <Link to="/mess-cost" className="flex flex-col items-center gap-2 cursor-pointer">
                    <FaMoneyBill1Wave className="text-2xl" />
                    <p>Mess cost</p>
                </Link>
                <Link to="mess-wallet" className="flex flex-col items-center gap-2 cursor-pointer">
                    <FaWallet className="text-2xl" />
                    <p>Mess Wallet</p>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Operations