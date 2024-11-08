import BalanceCard from "../../component/BalanceCard"
import MealCard from "../../component/MealCard"
import Operations from "../../component/Operations"


const Home = () => {
  return (
    <div>
        <MealCard title="Do you breakfast" />
        <MealCard title="Do you dinner" />
        <MealCard title="Any extra cost" />
        <BalanceCard balanceTitle="Mess Balance" totalBalance={1000} totalCost={100} availableBalance={900} />
        <Operations />
    </div>
  )
}

export default Home