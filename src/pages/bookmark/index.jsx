import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import Icon from "@gh/icon";
import Clock from "./_clock";
import BMPrimary from "./_BMRenderer/primary";
import BMSecondary from "./_BMRenderer/secondary";
import BMTertier from "./_BMRenderer/tertier";
import Search from "./_search";
import NewBookmark from "./_newBookmark";
import Setting from "./_settings";
import Context from "@context";

export default function App(props) {
  const { app, bm } = React.useContext(Context);
  const [search, setsearch] = useState("");
  return (
    <UI.Col spacing={5}>
      <Clock isShowPrayer={app.isShowPrayer} />
      <BMPrimary data={bm.data.filter((d) => d.group == -1)} />
      <BMSecondary data={bm.data.filter((d) => !d.group || d.group == 0)} />
      <Search value={search} onChange={setsearch} />
      <UI.Col flexGrow={1} justifyContent="space-between">
        <BMTertier data={bm.data.filter((d) => d.group == 1)} search={search} />
        <UI.Row justifyContent="space-between" alignItems="center" spacing={2}>
          <Setting />
          <NewBookmark />
        </UI.Row>
      </UI.Col>
    </UI.Col>
  );
}
