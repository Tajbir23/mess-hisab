/* eslint-disable react/prop-types */
import Button from "../ui/Button"


const MealCard = ({title = "Do you breakfast"}) => {
  return (
    <div className="w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 mb-5 p-5">
        <h1 className="text-center text-xl">{title} ?</h1>
        <div className="flex justify-center gap-5 mt-5">
            <Button className="bg-green-500 hover:bg-green-800 transform duration-500">Yes</Button>
            <Button className="bg-red-500 hover:bg-red-800 transform duration-500">No</Button>
        </div>
    </div>
  )
}

export default MealCard