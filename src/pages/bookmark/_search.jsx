import React, { useState } from "react";

import { TextField, InputAdornment, Button, Stack } from "@mui/material";
import UI from "@gh/ui";
import Icon from "@gh/icon";
import Form from "@gh/form";
import SearchIcon from "@mui/icons-material/Search";
import Context from "@context";
import Setting from "./_settings";

import { useBool } from "gh-usereact/hook";

export default function App(props) {
  const { app } = React.useContext(Context);
  return (
    <Stack spacing={0.5}>
      <TextField
        {...props}
        size="large"
        label=""
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Search Bookmark"
        InputProps={{
          sx: {
            borderRadius: 120,
            overflow: "hidden",
            bgcolor: "white",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: props.value && (
            <InputAdornment position="start">
              <Button variant="outlined" size="small" onClick={(e) => props.onChange("")}>
                clear
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Stack direction={"row"} spacing={2} px={6} justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          {app?.searchtag?.map((d, ix) => (
            <ShortCut key={ix} label={d} onClick={props.onChange} />
          ))}
          {/* {!app?.searchtag?.length && (
            <Setting
              El={
                <UI.Button variant="text" size="small" startIcon={<Icon.Plus />}>
                  New Tag
                </UI.Button>
              }
            />
          )} */}
          <NewTag />
        </Stack>
        <ShortCut label={"Show All"} value={"*"} onClick={props.onChange} />
      </Stack>
    </Stack>
  );
}

function NewTag() {
  const [val, setval] = useState("");
  const { app, setapp } = React.useContext(Context);

  let open = useBool();

  function handleChange(e) {
    if (!val.length) return;
    open.set.close();
    setval("");
    setapp({ ...app, searchtag: app?.searchtag ? [...app?.searchtag, val] : [val] });
  }

  return (
    <>
      {open.get() ? (
        <TextField
          autoFocus
          value={val}
          onChange={(e) => setval(e.target.value)}
          onBlur={handleChange}
          onKeyDown={(e) => e?.key == "Enter" && handleChange()}
          sx={{
            "& input": {
              height: 24,
              color: "white",
              py: "2px",
            },
          }}
        />
      ) : (
        <UI.Button variant="text" size="small" onClick={open.set.open} startIcon={<Icon.Plus />}>
          New Tag
        </UI.Button>
      )}
    </>
  );
}

function ShortCut(props) {
  return (
    <UI.Text
      component="a"
      variant="body2"
      onClick={() => props.onClick(props.value || props.label)}
      sx={{
        color: "grey",
        cursor: "pointer",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {props.label}
    </UI.Text>
  );
}
