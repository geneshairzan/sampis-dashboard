import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import portainer from "@img/icon/portainer.webp";
import google from "@img/icon/google.png";
import mysql from "@img/icon/mysql.png";
import github from "@img/icon/github.png";
import youtube from "@img/icon/youtube.png";

export default function App(props) {
  const [contextMenu, setContextMenu] = React.useState(null);

  function getIcon(path) {
    if (path.includes("google")) return google;
    if (path.includes("portainer")) return portainer;
    if (path.includes("mysql")) return mysql;
    if (path.includes("github")) return github;
    if (path.includes("youtube")) return youtube;

    return `https://www.google.com/s2/favicons?domain=${path}&sz=128`;
  }

  return (
    <UI.Col
      onContextMenu={props.onContextMenu}
      center
      justifyContent="space-between"
      component="a"
      href={props.to}
      sx={{
        flexShrink: 0,
        width: { xs: 72, md: 120 },
        "&:hover": {
          "& h5": {
            color: "primary.main",
          },
        },
        "& img": {
          width: { xs: 36, md: "50%" },
          height: "auto",
        },
      }}
    >
      <img src={getIcon(props?.to)} alt="" />
      <UI.Text
        bold
        // variant={{ xs: "body1", md: "h5" }}
        align="center"
        color={"white"}
        py={1}
        sx={{
          typography: { xs: "body1", md: "h5" },
        }}
      >
        {props.title}
      </UI.Text>
    </UI.Col>
  );
}
