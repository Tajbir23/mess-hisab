import { useRef } from "react"
import Button from "../../ui/Button"


const MessWallet = () => {
    const printRef = useRef(null)
  const mealDetails = [
    { name: "John Doe", paymentDate: "2023-06-01", rice: 8.50, meal: 12.75 },
    { name: "Jane Smith", paymentDate: "2023-06-02", rice: 0, meal: 15.00 },
    { name: "Bob Johnson", paymentDate: "2023-06-03", rice: 7.25, meal: 0 },
    { name: "Alice Brown", paymentDate: "2023-06-04", rice: 0, meal: 13.50 },
    { name: "Charlie Wilson", paymentDate: "2023-06-05", rice: 9.00, meal: 14.25 },
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
      <div className="flex flex-col justify-center gap-5 items-center mb-4">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-bold">Mess wallet</h1>
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
                    <th className="py-2 px-4 border-b text-center">Rice </th>
                    <th className="py-2 px-4 border-b text-center">Meal </th>
                  </tr>
                </thead>

                <tbody>
                  {mealDetails.map((meal, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                      <td className="py-2 px-4 border-b text-left">{meal.name}</td>
                      <td className="py-2 px-4 border-b text-left">{meal.paymentDate}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.rice} kg</td>
                      <td className="py-2 px-4 border-b text-center">{meal.meal} tk</td>
                    </tr>
                  ))}
                  <tr className="bg-green-500 text-white">
                    <td className="py-2 px-4 border-b text-left">Total</td>
                    <td></td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.rice, 0)} kg</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.meal, 0)} tk</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default MessWallet