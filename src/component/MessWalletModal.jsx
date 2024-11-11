/* eslint-disable react/prop-types */

import { useState } from "react"
import Button from "../ui/Button"
import { useUpdateWalletMutation } from "../redux/services/userApi"


const MessWalletModal = ({modal, setModal, className}) => {
    const [amount, setAmount] = useState(0)
    const [updateWallet] = useUpdateWalletMutation()

    const handleUpdateWallet = async(amountType) => {
        let actualAmount = 0
        if(amountType === "increase") {
            actualAmount = amount
        } else if(amountType === "decrease") {
            actualAmount = -amount
        }
        
        let type = ""
        if(modal.type === "rice"){
            type = "rice"
        }else if(modal.type === "meal"){
            type = "mealBalance"
        }
        
        const body = {
            [type]: actualAmount
        }
        try {
            const userId = modal?.userId
            console.log(userId, body)
            await updateWallet({userId, body})
            setModal({isOpen: false, name: "", type: ""})
        } catch (error) {
            console.log(error)
            setModal({isOpen: false, name: "", type:""})
        }
    }
  return (
    <div className={className}>
        <div className="flex flex-col gap-3 bg-white p-6 rounded-md">
            <h1 className="text-xl font-semibold">Update {modal.type} of {modal.name}</h1>
            <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter your amount" className="w-full px-2 py-1 rounded-md border" />
            <div className="flex gap-5 justify-between">
                <Button onClick={() => handleUpdateWallet("increase")} className="bg-green-500">Increase</Button>
                <Button onClick={() => handleUpdateWallet("decrease")} className="bg-green-600">Decrease</Button>
                <Button onClick={() => setModal({isOpen: false, name: "", type: ""})} className="bg-red-500">Cancel</Button>
            </div>
        </div>
    </div>
  )
}

export default MessWalletModal