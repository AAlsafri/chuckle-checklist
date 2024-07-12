export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((response) =>
    response.json()
  );
};

export const addJokes = (text) => {
  return fetch("http://localhost:8088/jokes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, told: false }),
  }).then((response) => response.json());
};

export const updateJoke = async (joke) => {
  const response = await fetch(`http://localhost:8088/jokes/${joke.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  });
  return response.json();
};

export const deleteJoke = async (id) => {
  await fetch(`http://localhost:8088/jokes/${id}`, {
    method: "DELETE",
  });
};

// import { useState } from "react";

// export const postJokes = () => {
//   const [userJoke, setUserJoke] = useState([]);

//   return (
//     <div
//       className=""
//       type="text"
//       onChange={(userJoke) => {
//         setUserJoke(event.target.value);
//       }}
//     >
//       <button
//         className="joke-input joke-input-submit"
//         onClick={() => {
//             setUserJoke()
//           told(false);
//         }}
//       ></button>
//     </div>
//   );
// };
