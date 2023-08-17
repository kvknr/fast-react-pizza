//Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component SearchOrder
function SearchOrder() {
  //useStates
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  //Handler Functions
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  //returned JSX
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

//EXports
export default SearchOrder;
