import Context from "@context";
import ThemeProvider from "./theme";
import React from "react";

import useapp from "./reducer/useapp";
import usebookmark from "./reducer/useBookmark";

export default function App(props) {
  const { app, setapp, } = useapp();
  const bm = usebookmark();
  return (
    <Context.Provider
      value={{
        app,
        setapp,
        bm,
      }}
    >
      <ThemeProvider>{props.children}</ThemeProvider>
    </Context.Provider>
  );
}
