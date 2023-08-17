//Imports
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

//Component Menu
function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//Exports
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
