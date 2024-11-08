import { useRef } from "react"
import Button from "../../ui/Button"


const MealDetails = () => {
  const printRef = useRef(null)
  const mealDetails = [
    { name: "John Doe", paymentDate: "2023-06-01", breakfast: 8.50, dinner: 12.75 },
    { name: "Jane Smith", paymentDate: "2023-06-02", breakfast: 0, dinner: 15.00 },
    { name: "Bob Johnson", paymentDate: "2023-06-03", breakfast: 7.25, dinner: 0 },
    { name: "Alice Brown", paymentDate: "2023-06-04", breakfast: 0, dinner: 13.50 },
    { name: "Charlie Wilson", paymentDate: "2023-06-05", breakfast: 9.00, dinner: 14.25 },
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
            <h1 className="text-2xl font-bold">Meal details Table</h1>
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
                    <th className="py-2 px-4 border-b text-center">Breakfast Cost </th>
                    <th className="py-2 px-4 border-b text-center">Dinner Cost </th>
                    <th className="py-2 px-4 border-b text-center">Extra Cost </th>
                  </tr>
                </thead>

                <tbody>
                  {mealDetails.map((meal, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                      <td className="py-2 px-4 border-b text-left">{meal.name}</td>
                      <td className="py-2 px-4 border-b text-left">{meal.paymentDate}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.breakfast}</td>
                      <td className="py-2 px-4 border-b text-center">{meal.dinner}</td>
                      <td className="py-2 px-4 border-b text-center">30</td>
                    </tr>
                  ))}
                  <tr className="bg-green-500 text-white">
                    <td className="py-2 px-4 border-b text-left">Total cost</td>
                    <td></td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.breakfast, 0)}</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + meal.dinner, 0)}</td>
                    <td className="py-2 px-4 border-b text-center">{mealDetails.reduce((total, meal) => total + 30, 0)}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default MealDetails