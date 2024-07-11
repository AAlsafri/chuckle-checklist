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
