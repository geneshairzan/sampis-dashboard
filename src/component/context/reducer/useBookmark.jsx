import { useState, useEffect } from "react";

let default_bookmark = [
  {
    id: 'p1', name: 'HTTPS 3000', path: 'https://localhost:3000', group: -1, color: "lOrang"
  },
  { id: 'p2', name: 'Excalidraw', path: 'https://excalidraw.com', group: -1, color: "lBlue" },
  { id: 'p3', name: 'Chat GPT', path: 'https://chat.openai.com', group: -1, color: "lGreen" }
]

export default function App(props) {
  const [data, setdata] = useState(localStorage?.getItem("bookmark") ? getCache('bookmark') : default_bookmark);


  function push(val) {
    let temp = [...data, val];
    setdata(temp);
    localStorage.setItem("bookmark", JSON.stringify(temp));
  }

  function edit(val) {
    let index = data.findIndex((d) => d.id == val.id);
    if (index >= 0) {
      let temp = data;
      temp[index] = val;
      setdata([...temp]);
      localStorage.setItem("bookmark", JSON.stringify(temp));
    }
  }

  function pop(val) {
    let index = data.findIndex((d) => d.id == val.id);
    if (index >= 0) {
      let temp = data;
      temp.splice(index, 1);
      setdata([...temp]);
      localStorage.setItem("bookmark", JSON.stringify(temp));
    }
  }

  return {
    data,
    push,
    pop,
    edit,
  };
}

function getCache(item) {
  try {
    return JSON.parse(localStorage.getItem(item));
  } catch (error) {
    return [];
  }
}
