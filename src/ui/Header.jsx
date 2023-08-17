//Imports
import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";

//Component Header
function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Vinoth Kumar</p>
    </header>
  );
}

//Exports
export default Header;
