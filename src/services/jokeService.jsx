export const addJokes = async (jokeInput) => {
  const newJoke = {
    text: jokeInput,
    told: false,
  };

  return fetch("http://localhost:8088/jokes", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newJoke),
  }).then((response) => response.json());

  //setUserInput("");
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
