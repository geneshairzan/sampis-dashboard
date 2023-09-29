import UI from "@gh/ui";
import LargeBtn from "@component/app/bookmark/largeBtn";

import React, { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";
import IconBtn from "@component/app/bookmark/iconBtn";
import ContextMenu from "../_contextMenu";
import Context from "@context";
import { forEach } from "lodash";


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
    <UI.Stack direction={{ xs: "column", md: "row" }} spacing={2}>

      {data?.map((d, ix) =>
        <LargeBtn key={ix} title={d.name} to={d.path} color={d.color} onContextMenu={(e) => handleContextMenu(e, d)} />
      )}
      <ContextMenu
        primary
        contextMenu={contextMenu}
        onClose={handleClose}
      />
    </UI.Stack>
  );
}
