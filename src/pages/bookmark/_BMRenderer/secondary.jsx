import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";
import UI from "@gh/ui";
import IconBtn from "@component/app/bookmark/iconBtn";
import ContextMenu from "../_contextMenu";

export default function App({ data }) {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event, d) => {
    event.preventDefault();
    setContextMenu({
      data: d,
      pos:
        contextMenu === null
          ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
          : null,
    });
  };
  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <Stack direction={"row"} spacing={2} maxWidth={"100vw"} overflow="auto">
      {data?.map((d, ix) => (
        <IconBtn key={ix} title={d.name} to={d.path} onContextMenu={(e) => handleContextMenu(e, d)} />
      ))}
      <ContextMenu
        contextMenu={contextMenu}
        onClose={handleClose}
      />
    </Stack>
  );
}
