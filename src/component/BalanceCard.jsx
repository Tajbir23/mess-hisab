/* eslint-disable react/prop-types */
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa"


const BalanceCard = ({balanceTitle = "Mess Balance", totalBalance = 0, totalCost = 0, availableBalance = 0}) => {
    const date = new Date()
    const month = date.getMonth()
    const year = date.getFullYear()
    const day = date.getDate()
  return (
    <div className="w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0">
      <div className="p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm font-medium opacity-90">{balanceTitle} {`(${day}-${month}-${year})`}</p>
            <p className="text-3xl font-bold mt-1">
              {totalBalance} ₺
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <FaArrowCircleDown className="h-4 w-4 text-red-400" />
            </div>
            <div>
              <p className="text-sm font-medium opacity-80">Cost</p>
              <p className="font-semibold">
                {totalCost} ₺
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <FaArrowAltCircleUp className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium opacity-80">Available balance</p>
              <p className="font-semibold">
                {availableBalance} ₺
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard