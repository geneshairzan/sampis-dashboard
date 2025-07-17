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
      <GDocs />
      <BMPrimary data={bm.data.filter((d) => d.group == -1)} />
      <BMSecondary data={bm.data.filter((d) => !d.group || d.group == 0)} />
      <Search value={search} onChange={setsearch} />
      <UI.Col flexGrow={1} justifyContent="space-between">
        <BMTertier search={search} />
        <UI.Row justifyContent="space-between" alignItems="center" spacing={2}>
          <Setting />
          <NewBookmark />
        </UI.Row>
      </UI.Col>
    </UI.Col>
  );
}

function GDocs(params) {
  const style = { px: 2, py: 1, borderRadius: 2, width: 80 };
  return (
    <UI.Row gap={2}>
      <UI.Col
        sx={{
          ...style,
          bgcolor: "#00ac47",
        }}
        center
        component="a"
        href="https://sheet.new/"
      >
        <UI.Text variant="body1" color="white">
          + Sheet
        </UI.Text>
      </UI.Col>
      <UI.Col
        sx={{
          ...style,
          bgcolor: "#2684fc",
        }}
        center
        component="a"
        href="https://docs.new/"
      >
        <UI.Text variant="body1" color="white">
          + Doc
        </UI.Text>
      </UI.Col>
      <UI.Col
        sx={{
          ...style,
          bgcolor: "#ffba00",
        }}
        center
        component="a"
        href="https://docs.new/"
      >
        <UI.Text variant="body1" color="white">
          + Slide
        </UI.Text>
      </UI.Col>
    </UI.Row>
  );
}
