/* eslint-disable react/prop-types */
import Button from "./Button"


const Modal = ({setModal, title}) => {
    const cancelModal = () => {
        if(title === "breakfast") {
            setModal({breakfastModal: false})
        } else if(title === "dinner") {
            setModal({dinnerModal: false})
        } else if(title === "extra Cost") {
            setModal({extraCostModal: false})
        }
    }
    
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-white/20 p-8 rounded-md backdrop-blur">
            <h1 className="font-semibold text-xl">Write amount for {title}</h1>
            <input className="border border-black px-3 py-1 rounded-md" type="text" placeholder="Write your amount" />
            <div className="flex justify-between gap-5">
                <Button className="bg-green-500">Submit</Button>
                <Button onClick={() => cancelModal()} className="bg-red-500">Cancel</Button>
            </div>
        </div>
    </div>
  )
}

export default Modal