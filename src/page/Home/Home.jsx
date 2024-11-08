import { useState } from "react"
import BalanceCard from "../../component/BalanceCard"
import MealCard from "../../component/MealCard"
import Operations from "../../component/Operations"
import Modal from "../../ui/Modal"


const Home = () => {
  const [modal, setModal] = useState({
    breakfastModal: false,
    dinnerModal: false,
    extraCostModal: false,
  })
  return (
    <div>
        <MealCard onClick={() => setModal({breakfastModal: true})} title="Do you breakfast" />
        <MealCard onClick={() => setModal({dinnerModal: true})} title="Do you dinner" />
        <MealCard onClick={() => setModal({extraCostModal: true})} title="Any extra cost" />
        <BalanceCard balanceTitle="Mess Balance" totalBalance={1000} totalCost={100} availableBalance={900} />
        <Operations />
        {modal?.breakfastModal && <Modal title="breakfast" setModal={setModal} />}
        {modal?.dinnerModal && <Modal title="dinner" setModal={setModal} />}
        {modal?.extraCostModal && <Modal title="extra Cost" setModal={setModal} />}
    </div>
  )
}

export default Home