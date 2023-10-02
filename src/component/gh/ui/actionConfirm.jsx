import React, { useState } from "react";
import UI from "@gh/ui";
import { Dialog } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
export default function App({ onClick, children, title, desc, ...props }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <UI.Button {...props} onClick={() => setisOpen(true)}>
        {children}
      </UI.Button>
      <Dialog open={isOpen}>
        <UI.Col
          center
          spacing={2}
          sx={{
            minWidth: 300,
            minHeigt: 180,
            p: 3,
          }}
        >
          <WarningIcon
            sx={{
              fontSize: 90,
              color: "#ff4b2f",
            }}
          />
          <UI.Text variant="h5" bold align="center">
            {title}
          </UI.Text>
          <UI.Text variant="body1"> {desc}</UI.Text>
          <UI.Row spacing={2} width="100%">
            <UI.Button variant="outlined" fullWidth color="secondary" onClick={() => setisOpen(false)}>
              Cancel
            </UI.Button>
            <UI.Button
              fullWidth
              color="secondary"
              onClick={() => {
                onClick();
                setisOpen(false);
              }}
            >
              Continue
            </UI.Button>
          </UI.Row>
        </UI.Col>
      </Dialog>
    </>
  );
}
