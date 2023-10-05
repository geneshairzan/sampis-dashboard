import React from "react";

import { TextField, Stack, MenuItem } from "@mui/material";
import Label from "./label";

export default function App({ noLabel = false, options, ...props }) {
  return (
    <Stack spacing={0.5} width={props.fullWidth ? "100%" : "auto"}>
      {!noLabel && <Label label={props.label} tip={props.tip} />}
      <TextField
        select
        {...props}
        sx={{
          ...props.sx,
          "& .MuiFormHelperText-root": {
            position: "absolute",
            bottom: -16,
          },
        }}
        inputProps={{
          sx: {
            bgcolor: "white.main",
            pl: props.InputProps && 0.5,
          },
        }}
        InputProps={props.InputProps}
        label=""
        type={props.type || "text"}
        name={props.name}
        value={props.value || ""}
        onChange={props.onChange}
        placeholder={props.placeholder || props.label}
        error={props.error ? true : false}
        helperText={props.helperText}
        disabled={props.disabled}
      >
        {options?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
