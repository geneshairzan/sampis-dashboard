import { TextField, InputAdornment, Button, Stack } from "@mui/material";
import UI from "@gh/ui";
import Icon from "@gh/icon";
import SearchIcon from "@mui/icons-material/Search";
import Context from "@context";
import React from 'react';
import Setting from "./_settings";

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
        <Stack direction={"row"} spacing={2}>
          {app?.searchtag?.map((d, ix) =>
            <ShortCut key={ix} label={d} onClick={props.onChange} />
          )}
          {!app?.searchtag?.length &&
            <Setting El={
              <UI.Button variant='text' size="small" startIcon={
                <Icon.Plus />

              }>New Tag</UI.Button>
            } />
          }

        </Stack>
        <ShortCut label={"Show All"} value={"*"} onClick={props.onChange} />
      </Stack>
    </Stack>
  );
}

function ShortCut(props) {
  return (
    <UI.Text
      component='a'
      variant="body2"
      onClick={() => props.onClick(props.value || props.label)}
      sx={{
        color: "grey",
        cursor: 'pointer',
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {props.label}
    </UI.Text>
  );
}