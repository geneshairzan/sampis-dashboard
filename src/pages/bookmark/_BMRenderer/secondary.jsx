import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";
import UI from "@gh/ui";
import IconBtn from "@component/app/bookmark/iconBtn";
import ContextMenu from "../_contextMenu";
import Context from "@context";

export default function App() {
  const { bm } = React.useContext(Context);
  const [contextMenu, setContextMenu] = React.useState(null);
  const [bmBuffer, setbmBuffer] = useState(bm.data);
  const [onDrag, setonDrag] = useState();

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

  function onDragOver(e) {
    if (e.target?.id && onDrag != e.target?.id) {
      let a = parseInt(onDrag);
      let b = parseInt(e.target.id);
      let ixa = bmBuffer.findIndex((d) => d.order == a);
      let ixb = bmBuffer.findIndex((d) => d.order == b);
      if (ixa != ixb && ixb >= 0 && ixa >= 0) {
        let temp = bm.data;
        [temp[ixa].order, temp[ixb].order] = [temp[ixb].order, temp[ixa].order];
        setbmBuffer([...temp]);
        setonDrag(b);
      }
    }
  }

  function onDragStart(e) {
    e.target?.id && setonDrag(e.target.id);
  }

  function onDragEnd() {
    setonDrag();
    bm.set([...bmBuffer]);
  }

  return (
    <Stack direction={"row"} spacing={2} maxWidth={"100vw"} overflow="auto">
      {bmBuffer
        ?.filter((d) => !d.isFolder)
        .filter((d) => !d.group || d.group == 0)
        .sort((a, b) => (a.order > b.order ? -1 : 1))
        .map((d, ix) => (
          <IconBtn
            key={ix}
            id={d.order}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            title={d.name}
            to={d.path}
            onContextMenu={(e) => handleContextMenu(e, d)}
          />
        ))}
      <ContextMenu contextMenu={contextMenu} onClose={handleClose} />
    </Stack>
  );
}
