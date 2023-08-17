//Imports
import { formatCurrency } from "../../utils/helpers";

//Component CartItem
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

//Exports
export default CartItem;
