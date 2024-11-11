import { useRef, useState } from "react"
import Button from "../../ui/Button"
import { useGetAllUsersQuery, useGetUserQuery } from "../../redux/services/userApi"
import { CiCirclePlus } from "react-icons/ci"
import MessWalletModal from "../../component/MessWalletModal"


const MessWallet = () => {
  const {data} = useGetAllUsersQuery()
  const {data: user} = useGetUserQuery()
  const [modal, setModal] = useState({
    isOpen: false,
    name: "",
    userId: "",
    type: "",
  })

    const printRef = useRef(null)

  const handlePrint = () => {
    const content = printRef.current
    const originalContent = document.body.innerHTML
    document.body.innerHTML = content.innerHTML
    window.print()
    document.body.innerHTML = originalContent
  }

  const handleModal = (name, id, type) => {
    setModal({isOpen: true, name, userId: id, type})
  }

  return (
    <div>
    <div className="container mx-auto p-5">
      <div className="flex justify-between gap-5 items-center mb-4">
          <h1 className="text-2xl font-bold">Mess wallet</h1>
          <Button onClick={handlePrint} className="bg-green-400 text-white">Print</Button>
      </div>
      <div ref={printRef}>
          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Member Name</th>
                    <th className="py-2 px-4 border-b text-center">Rice </th>
                    <th className="py-2 px-4 border-b text-center">Meal </th>
                  </tr>
                </thead>

                <tbody>
                  {data?.map((meal, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                      <td className="py-2 px-4 border-b text-left">{meal?.name}</td>
                      <td className="py-2 px-4 border-b text-center"><div className="flex items-center justify-center gap-2"><h1>{meal?.rice} kg</h1> {user.user.role === "manager" | user.user.role === "admin" && <CiCirclePlus onClick={() => handleModal(meal?.name, meal?._id, "rice")} className="text-xl cursor-pointer" />}</div></td>
                      <td className="py-2 px-4 border-b text-center"><div className="flex items-center justify-center gap-2"><h1>{meal?.mealBalance} tk</h1> {user.user.role === "manager" | user.user.role === "admin" && <CiCirclePlus onClick={() => handleModal(meal?.name, meal._id, "meal")} className="text-xl cursor-pointer" />}</div></td>
                    </tr>
                  ))}
                  <tr className="bg-green-500 text-white">
                    <td className="py-2 px-4 border-b text-left">Total</td>
                    <td className="py-2 px-4 border-b text-center">{data?.reduce((total, meal) => total + meal?.rice, 0)} kg</td>
                    <td className="py-2 px-4 border-b text-center">{data?.reduce((total, meal) => total + meal?.mealBalance, 0)} tk</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
      {modal.isOpen && <MessWalletModal modal={modal} setModal={setModal} className="fixed top-0 left-0 bg-black/35 h-screen w-full flex items-center justify-center" />}
    </div>
  )
}

export default MessWallet