//Imports
import { useNavigate, useRouteError } from "react-router-dom";

//Component Error
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

//Exports
export default Error;
