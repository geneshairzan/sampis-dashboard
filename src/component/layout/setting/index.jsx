import { Outlet, useLocation } from "react-router-dom";
import UI from "@gh/ui";
import React, { useContext } from "react";
import Header from "./header";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from "@mui/material/useMediaQuery";
import Context from "@context";
import Menus from "./_menuRenderer";

import {
  Box,
  MenuItem,
  Popper,
  Divider,
  Grow,
  Paper,
  MenuList,
  IconButton,
  Badge,
  Stack,
  Typography,
  ClickAwayListener,
} from "@mui/material";

// import LoadingScreen from "@component/app/overlay";
// import Logo from "@img/logogram.png";

function Layout({ children }) {
  return (
    <UI.Col
      sx={{
        width: "100vw",
        height: "100vh",
        userSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        overflowY: "auto",
        overflowX: "hidden",
        "> div": {
          flexGrow: 1,
        },
      }}
      px={5}
      py={3}
    >
      {children}
    </UI.Col>
  );
}

export default function Dashboard({ isFull = true, children }) {
  const { app } = React.useContext(Context);

  return (
    <Stack
      width={"100%"}
      // minHeight={"100vh"}
      maxHeight={"100vh"}
      height={{ xs: app.mobilescreenheight, md: "100vh" }}
      sx={{
        position: "absolute",
        overflow: "auto",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        bgcolor: "#fafafa",
      }}
    >
      <UI.Col pt={"64px"} height="100%" position="relative">
        <Header />
        <UI.Row height="100%">
          <Menus />
          <UI.Col
            sx={{
              height: "100%",
              width: "100%",
              py: 3,
              px: 5,
              zIndex: 99,
            }}
          >
            {children}
          </UI.Col>
        </UI.Row>
      </UI.Col>
    </Stack>
  );
}
