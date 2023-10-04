import React, { useState, useEffect } from "react";
import UI from "@gh/ui";
import Form from "@gh/form";
import Context from "@context";

export default function App(props) {
  const { app, setapp } = React.useContext(Context);

  return (
    <UI.Stack spacing={3}>
      <UI.Text variant="h4" bold color="primary">
        Settings
      </UI.Text>
      <Form.SearchTag
        label="Serach Tag"
        searchtag
        value={app?.searchtag || []}
        onChange={(e) => setapp({ ...app, searchtag: e.target.value })}
      />
      <Form.Switch
        value={app?.isShowPrayer}
        onChange={(e) => setapp({ ...app, isShowPrayer: e.target.value })}
        label="show prayer widget"
      />
    </UI.Stack>
  );
}
