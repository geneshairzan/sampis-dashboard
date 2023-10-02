import { useState, useEffect } from "react";

let default_bookmark = [
  {
    id: "p1",
    name: "HTTPS 3000",
    path: "https://localhost:3000",
    group: -1,
    color: "primary",
  },
  { id: "p2", name: "Excalidraw", path: "https://excalidraw.com", group: -1, color: "secondary" },
  { id: "p3", name: "Chat GPT", path: "https://chat.openai.com", group: -1, color: "third" },
];

export default function App() {
  const [data, set] = useState(localStorage?.getItem("bookmark") ? getCache("bookmark") : default_bookmark);

  function push(val) {
    let temp = [...data, val];
    set(temp);
  }

  function edit(val) {
    let index = data.findIndex((d) => d.id == val.id);
    if (index >= 0) {
      let temp = data;
      temp[index] = val;
      set([...temp]);
    }
  }

  function pop(val) {
    let index = data.findIndex((d) => d.id == val.id);
    if (index >= 0) {
      let temp = data;
      temp.splice(index, 1);
      set([...temp]);
    }
  }

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(data));
  }, [data]);

  return {
    data,
    push,
    pop,
    edit,
    set,
  };
}

function getCache(item) {
  try {
    return JSON.parse(localStorage.getItem(item));
  } catch (error) {
    return [];
  }
}
