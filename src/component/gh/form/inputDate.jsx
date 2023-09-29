import * as React from "react";
import { TextField, Typography, Stack, InputAdornment } from "@mui/material";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Label from "./label";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import h from "@gh/helper";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerText({
  disablePast = false,
  showplaceholder = false,
  clearable = false,
  noLabel = false,
  ...props
}) {
  return (
    <Stack spacing={1} width={props.fullWidth ? "100%" : "auto"}>
      {!noLabel && <Label label={props.label} tip={props.tip} />}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          {...props}
          onChange={(v) =>
            props.onChange({
              target: {
                value: v,
                name: props?.name,
              },
            })
          }
          value={props.value || null}
          label=""
          inputFormat="dd MMM yyyy"
          sx={{
            bgcolor: "white.main",
            "& .MuiFormHelperText-root": {
              position: "absolute",
              bottom: -16,
            },
          }}
        />
        {/* <MobileDatePicker
          {...props}
          value={props.value ? h.date.parse(props.value) : null}
          label=""
          disablePast={disablePast}
          inputFormat="dd MMM yyyy"
          closeOnSelect
          inputProps={{
            style: { color: "#103f64" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={showplaceholder ? props.placeholder : ""}
              disabled={props.disabled}
              color="primary"
              sx={{
                bgcolor: "white.main",
                "& .MuiFormHelperText-root": {
                  position: "absolute",
                  bottom: -16,
                },
                "& .MuiInputBase-root": {
                  px: !props.startAdornment && "4px",
                },
              }}
              error={props.error ? true : false}
              helperText={props.helperText}
              InputProps={{
                startAdornment: <InputAdornment position="start">{props.startAdornment}</InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        /> */}
      </LocalizationProvider>
    </Stack>
  );
}
