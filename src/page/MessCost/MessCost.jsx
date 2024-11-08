import { useRef } from "react"
import Button from "../../ui/Button"


const MessCost = () => {
const printRef = useRef(null)
  const mealDetails = [
    { name: "John Doe", paymentDate: "2023-06-01", paymentFor: "November", electricity: 8.50, wifi: 12.75, room: 2000, extraCost: 0 },
    { name: "Jane Smith", paymentDate: "2023-06-02", paymentFor: "November", electricity: 0, wifi: 15.00, room: 2000, extraCost: 0 },
    { name: "Bob Johnson", paymentDate: "2023-06-03", paymentFor: "November", electricity: 7.25, wifi: 0, room: 2000, extraCost: 0 },
    { name: "Alice Brown", paymentDate: "2023-06-04", paymentFor: "November", electricity: 0, wifi: 13.50, room: 2000, extraCost: 0 },
    { name: "Charlie Wilson", paymentDate: "2023-06-05", paymentFor: "November", electricity: 9.00, wifi: 14.25, room: 2000, extraCost: 0 },
  ]

  const handlePrint = () => {
    const content = printRef.current
    const originalContent = document.body.innerHTML
    document.body.innerHTML = content.innerHTML
    window.print()
    document.body.innerHTML = originalContent
  }
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col justify-center items-center gap-5 mb-4">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-bold">Mess Cost Table</h1>
            <input
              type="date"
              id="id"
              name="name"
              placeholder="placeholder"
              className="w-[200px] border border-slate-200 rounded-lg py-1 px-5 outline-none	bg-transparent"
            />
            to
            <input
              type="date"
              id="id"
              name="name"
              placeholder="placeholder"
              className="w-[200px] border border-slate-200 rounded-lg py-1 px-5 outline-none	bg-transparent"
            />

            <Button className="bg-green-400 text-white">Search</Button>
          </div>
          <Button onClick={handlePrint} className="bg-green-400 text-white">Print</Button>
      </div>
      <div ref={printRef}>
          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Member Name</th>
                    <th className="py-2 px-4 border-b text-left">Payment Date</th>
                    <th className="py-2 px-4 border-b text-center">Room </th>
                    <th className="py-2 px-4 border-b text-center">Electricity </th>
                    <th className="py-2 px-4 border-b text-center">Wifi </th>
                    <th className="py-2 px-4 border-b text-center">Extra cost </th>
                    <th className="py-2 px-4 border-b text-center">Payment for </th>
                  </tr>
                </thead>

                <tbody>
                  {mealDetails.map((meal, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                      <td className="py-2 px-4 border-b text-left">{meal.name}</td>
                      <td className="py-2 px-4 border-b text-left">{meal.paymentDate}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.room}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.electricity}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.wifi}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.extraCost}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.paymentFor}</td>
                    </tr>
                  ))}
                  <tr className="bg-green-500 text-white">
                    <td className="py-2 px-4 border-b text-left">Total cost</td>
                    <td></td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.room, 0)}</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.electricity, 0)}</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.wifi, 0)}</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.extraCost, 0)}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default MessCost