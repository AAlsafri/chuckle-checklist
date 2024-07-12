import React, { useState, useEffect } from "react";
import {
  getAllJokes,
  addJokes,
  updateJoke,
  deleteJoke,
} from "./services/jokeService";
import "./App.css";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    const jokes = await getAllJokes();
    setAllJokes(jokes);
  };

  useEffect(() => {
    const untold = allJokes.filter((joke) => !joke.told);
    const told = allJokes.filter((joke) => joke.told);
    setUntoldJokes(untold);
    setToldJokes(told);
  }, [allJokes]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addJokes(newJoke);
    setNewJoke("");
    fetchJokes();
  };

  const handleToggleJoke = async (joke) => {
    const updatedJoke = { ...joke, told: !joke.told };
    await updateJoke(updatedJoke);
    fetchJokes();
  };

  const handleDeleteJoke = async (id) => {
    await deleteJoke(id);
    fetchJokes();
  };

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <div className="joke-add-form-container">
        <h2 className="joke-add-form-container h2"> Add Joke</h2>
        <form onSubmit={handleSubmit} className="joke-add-form">
          <input
            type="text"
            value={newJoke}
            onChange={(event) => setNewJoke(event.target.value)}
            className="joke-input"
            placeholder="New one liner"
          />
          <button type="submit" className="joke-input-submit">
            Add Joke
          </button>
        </form>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2 className="joke-add-form-container h2">
            😒 Untold Jokes{" "}
            <span className="untold-count">({untoldJokes.length})</span>
          </h2>
          <ul>
            {untoldJokes.map((joke) => (
              <li key={joke.id} className="joke-list-item">
                <p className="joke-list-item-text">{joke.text}</p>
                <div>
                  <button
                    className="joke-list-action-toggle"
                    onClick={() => handleToggleJoke(joke)}
                  >
                    😂
                  </button>
                  <button
                    className="joke-list-action-delete"
                    onClick={() => handleDeleteJoke(joke.id)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="joke-list-container">
          <h2 className="joke-add-form-container h2">
            😂 Told Jokes{" "}
            <span className="told-count">({toldJokes.length})</span>
          </h2>
          <ul>
            {toldJokes.map((joke) => (
              <li key={joke.id} className="joke-list-item">
                <p className="joke-list-item-text">{joke.text}</p>
                <div>
                  <button
                    className="joke-list-action-toggle"
                    onClick={() => handleToggleJoke(joke)}
                  >
                    😒
                  </button>
                  <button
                    className="joke-list-action-delete"
                    onClick={() => handleDeleteJoke(joke.id)}
                  >
                    🗑️
                  </button>
                </div>
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
