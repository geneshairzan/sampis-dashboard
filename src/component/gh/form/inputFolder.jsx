import { useContext } from "react";
import Context from "@context";
import h from "@gh/helper";

import UI from "@gh/ui";
import Label from "./label";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

export default function InputFolder({ name, value, options, onChange, noLabel, ...props }) {
  const { bm } = useContext(Context);

  function setValue(v) {
    onChange({ target: { name: name, value: v } });
  }

  function addFolder(v) {
    bm.push({
      id: h.date.id_time(),
      name: v,
      isFolder: true,
      group: 1,
      isShow: true,
      order: bm.data.length + 1,
    });
  }

  return (
    <UI.Col>
      {!noLabel && <Label label={props.label} tip={props.tip} />}
      <Autocomplete
        fullWidth
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue(newValue.name);
          } else if (newValue && newValue.inputValue) {
            setValue(newValue.inputValue);
            addFolder(newValue.inputValue);
          } else {
            setValue(newValue.name);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue: inputValue,
              name: `Add "${inputValue}"`,
            });
          }
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={options}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option?.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => <li {...props}>{option?.name ? option.name : option}</li>}
        freeSolo
        renderInput={(params) => <TextField {...params} label="" />}
      />
    </UI.Col>
  );
}
