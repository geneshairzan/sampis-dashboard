import { useState, useEffect } from "react";

const default_setting = {
  theme: "light",
};

export default function App(props) {
  const [app, setapp] = useState(
    localStorage.getItem("setting") ? JSON.parse(localStorage.getItem("setting")) : default_setting
  );
  useEffect(() => {
    localStorage.setItem("setting", JSON.stringify(app));
  }, [app]);

  return {
    app,
    setapp,
  };
}
