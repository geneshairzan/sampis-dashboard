import React, { useEffect, useState } from "react";

import UI from "@component/gh/ui";
import Context from "@context";
import { MenuItem } from "@mui/material";
import { nav } from "./_nav";

import { Link, useLocation } from "react-router-dom";
import Icon from "@gh/icon";

import Collapse from "@mui/material/Collapse";
export default function DesktopMenu({ onClick }) {
  return (
    <UI.Col
      sx={{
        width: 280,
        justifyContent: "space-between",
        height: "100%",
        borderRight: "1px solid LightGrey",
      }}
    >
      <UI.Col spacing={{ xs: 0, md: 1 }} pt={3}>
        {/* <UI.Col px={2} pb={2}>
            <UI.Button startIcon={<Icon.Plus />} LinkComponent={Link} to="admin/update" onClick={onClick}>
              Add Plant Update
            </UI.Button>
          </UI.Col> */}
        {nav?.map((d, ix) => (
          <UI.Col spacing={0} key={ix}>
            <MenuItem component={Link} to={d?.path}>
              <UI.Row>{d?.name}</UI.Row>
            </MenuItem>
          </UI.Col>
        ))}
      </UI.Col>
      <UI.Col p={2}></UI.Col>
    </UI.Col>
  );
}

function RenderMultiMenu({ d, ...props }) {
  return (
    <>
      <UI.Text variant="body1" bold color="primary.dark" pt={2}>
        {d.name}
      </UI.Text>
      {/* <RenderSingleMenu d={d} asButton onClick={props.onClick} open={props.open} ix={props.ix} /> */}
      <Collapse
        // in={props.open}
        in={true}
        timeout="auto"
        unmountOnExit
      >
        <UI.Col spacing={2}>
          {d.child.filter(rolefilter).map((dx, dix) => (
            <>
              <RenderSingleMenu d={dx} key={dix} />
            </>
          ))}
        </UI.Col>
      </Collapse>
    </>
  );
}

function RenderSingleMenu({ d, asButton = false, ...props }) {
  return (
    <UI.Row
      alignItems="center"
      spacing={2}
      component={!asButton ? Link : "div"}
      to={!asButton ? d.path : ""}
      onClick={() => asButton && props.onClick(!props.open ? props.ix : null)}
      sx={{
        p: {
          color: "#464649",
          "&:hover": d.path && {
            color: "#e20547",
          },
        },
      }}
    >
      {d?.icon && (
        <d.icon
          sx={{
            fontSize: 16,
          }}
        />
      )}
      <UI.Text variant="menu" bold={!Boolean(d.path)}>
        {d.name}
      </UI.Text>
    </UI.Row>
  );
}

function rolefilter(d, auth) {
  if (d?.role) {
    if (auth?.user?.role_id == 2) {
      if (d.role.includes("admin")) return true;
    }
    if (auth?.user?.role_id == 4) {
      if (d.role.includes("tenant")) return true;
    }
    return false;
  }
  return true;
}

function RowMenuItem({ onClick, path, ...props }) {
  return (
    <MenuItem
      component={Link}
      to={path}
      onClick={onClick}
      target={props.newTab && "_blank"}
      rel={props.newTab && "noopener noreferrer"}
    >
      <UI.Row spacing={2} justifyContent="space-between" width="100%">
        <UI.Row spacing={2}>
          <UI.Col minWidth={24}>{props?.icon}</UI.Col>
          <UI.Text variant="body1">{props.label}</UI.Text>
        </UI.Row>
        {props?.endEl}
      </UI.Row>
    </MenuItem>
  );
}
