//Imports
import { useState } from "react";

//Component CreateUser
function CreateUser() {
  //useStates
  const [username, setUsername] = useState("");
  //Handler Functions
  function handleSubmit(e) {
    e.preventDefault();
  }
  //JSX Returned
  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

//Exports
export default CreateUser;
