import React, { useState, useEffect } from "react";

import { Stack, Typography, Menu, MenuItem } from "@mui/material";
import UI from "@gh/ui";
import IconBtn from "@component/app/bookmark/iconBtn";
import Form from "./_newBookmark/_form";
import Context from "@context";

export default function App({ contextMenu, onClose, primary = false }) {
  const { bm } = React.useContext(Context);
  const [onEdit, setonEdit] = useState();

  return (
    <>
      {!onEdit && contextMenu?.pos && (
        <Menu
          open={contextMenu?.pos !== null}
          onClose={onClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu?.pos !== null ? { top: contextMenu?.pos.mouseY, left: contextMenu?.pos.mouseX } : undefined
          }
        >
          <MenuItem
            onClick={() => {
              setonEdit(contextMenu.data);
              onClose();
            }}
            sx={{
              minWidth: 120,
            }}
          >
            Edit
          </MenuItem>

          <MenuItem
            disabled={primary}
            onClick={() => {
              contextMenu?.data?.isFolder ? bm.popFolder(contextMenu.data) : bm.pop(contextMenu.data);
              onClose();
            }}
            sx={{
              minWidth: 120,
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      )}
      {onEdit && <Form onClose={() => setonEdit()} refdata={onEdit} primary={primary} />}
    </>
  );
}
