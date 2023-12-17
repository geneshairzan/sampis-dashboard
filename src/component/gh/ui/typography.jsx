import React, { useEffect, useState } from "react";

import { Typography, Tooltip, Stack } from "@mui/material";
import _ from "lodash";
import Context from "@context";

import id from "@/assets/lang/id.json";
import en from "@/assets/lang/en.json";

export default function Typo(props) {
  return (
    <Typography
      className="font-link"
      {..._.omit(props, ["bold"])}
      variant={props.var || props.variant}
      fontStyle={props.italic ? "italic" : ""}
      fontWeight={props.bold ? 600 : ""}
      textTransform={props?.capitalize && "capitalize"}
      sx={props?.sx}
    >
      {props.children}
    </Typography>
  );
}

export function Title(props) {
  return (
    <Typo {...props} variant="h6">
      {props.children}
    </Typo>
  );
}
export function Subtitle(props) {
  return (
    <Typo {...props} variant="subtitle1">
      {props.children}
    </Typo>
  );
}

export function Caption(props) {
  return (
    <Typo {...props} variant="caption">
      {props.children}
    </Typo>
  );
}

const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});

export function TextOverflow({ children, tip }) {
  return (
    <Tooltip title={tip}>
      <MyComponent>{children}</MyComponent>
    </Tooltip>
  );
}

export function Elipsis({ children, sx, bold = false, ...props }) {
  return (
    <TextOverflow tip={children}>
      <Typography
        draggable={false}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "1",
          WebkitBoxOrient: "vertical",
          fontWeight: bold ? 600 : "",

          ...sx,
        }}
        {...props}
      >
        {children}
      </Typography>
    </TextOverflow>
  );
}
