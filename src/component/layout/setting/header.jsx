import React, { useState } from "react";

import UI from "@gh/ui";
import Icon from "@gh/icon";
import cc from "@img/cc.svg";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Context from "@context";

export default function App({ grey = false }) {
  const { auth } = React.useContext(Context);
  return (
    <UI.Row
      sx={{
        height: 64,
        position: "fixed",
        width: "100vw",
        top: 0,
        zIndex: 999,
        borderBottom: "1px solid LightGrey",
      }}
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <UI.Row spacing={2}>
        <UI.Text variant="h4" bold>
          Settings
        </UI.Text>
      </UI.Row>
      <UI.Text variant="h4" bold component={Link} to="/">
        SAMPIS BOOKMARK
      </UI.Text>
    </UI.Row>
  );
}
