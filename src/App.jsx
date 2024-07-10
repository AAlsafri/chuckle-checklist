import { useState } from "react";
import "./App.css";
import { addJokes } from "./services/jokeService";

export const App = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async () => {
    await addJokes(userInput);
    // Clear the input field after adding a joke
  };

  //Change handler to set the input value
  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className=".app-container">
      <div className=".app-heading-text">
        <h1>Chuckle Checklist</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New One Liner"
          value={userInput}
          onChange={changeHandler}
        />
        <div className=".joke-input-submit">
          <button type="submit">Add Joke</button>
        </div>
      </form>
    </div>
  );

  // return (
  //   <input
  //     className=""
  //     type="text"
  //     placeholder="New One Liner"
  //     onChange={(userInput) => {
  //       setUserInput(event.target.value);
  //     }}
  //   />
  // );
};
