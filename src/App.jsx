import { useEffect, useState } from "react";
import "./App.css";
import { addJokes, getAllJokes } from "./services/jokeService";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addJokes(userInput);
    setUserInput("");
    fetchJokes(); // Re-fetch jokes after adding a new one
  };

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const fetchJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
      console.log("A joke was added to the array!");
    });
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  useEffect(() => {
    const untold = allJokes.filter((joke) => !joke.told);
    const told = allJokes.filter((joke) => joke.told);
    setUntoldJokes(untold);
    setToldJokes(told);
  }, [allJokes]);

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>

        <h2>Add Joke</h2>
      </div>
      <form className="joke-add-form" onSubmit={handleSubmit}>
        <input
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          value={userInput}
          onChange={changeHandler}
        />
        <button className="joke-input-submit" type="submit">
          Add Joke
        </button>
      </form>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>
            Untold Jokes{" "}
            <span className="untold-count">{untoldJokes.length}</span>
          </h2>
          <ul>
            {untoldJokes.map((joke) => (
              <li key={joke.id} className="joke-list-item">
                <p className="joke-list-item-text">{joke.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="joke-list-container">
          <h2>
            Told Jokes <span className="told-count">{toldJokes.length}</span>
          </h2>
          <ul>
            {toldJokes.map((joke) => (
              <li key={joke.id} className="joke-list-item">
                <p className="joke-list-item-text">{joke.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
