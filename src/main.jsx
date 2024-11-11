import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root); // дерево react

// reactRoot.render(
//   createElement(
//     "ul",
//     {
//       className: "someClass", // <div class="someClass" />
//       style: { color: "red" },
//     },
//     [1, 2, 3, 5, 6, 7].map((id) => createElement("li", {}, id))
//   )
// );

reactRoot.render(
  <ul className='someClass' style={{ color: "red" }}>
    {[1, 2, 3, 5, 6, 7].map((id) => (
      <li>{id}</li>
    ))}
  </ul>
);
