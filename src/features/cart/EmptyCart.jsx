//Imports
import { Link } from "react-router-dom";

//Component EmptyCart
function EmptyCart() {
  //returned JSX
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>
      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

//Exports
export default EmptyCart;
