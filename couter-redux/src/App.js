import { Master } from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, discountNumber } from "./store/modules/couter/actions";

export default function App() {
  
  const num = useSelector(state => state.num)
  
  const dispatch = useDispatch()

  const handleClickAdd = () => dispatch(addNumber(1))
  const handleClickDiscount = () => dispatch(discountNumber(1))
  
  return <Master>
    <h1>Atual: {num}</h1>
    <div>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={handleClickDiscount}>-</button>
    </div>
  </Master>
}


