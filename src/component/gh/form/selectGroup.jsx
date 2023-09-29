import Label from "./label";
import { TextField, Stack, MenuItem } from "@mui/material";

export default function App(props) {
  const gr = ["Main", "Other"];
  return (
    <Stack spacing={0.5} width={props.fullWidth ? "100%" : "auto"}>
      {<Label label={props.label} tip={props.tip} />}
      <TextField select {...props} label="">
        {gr.map((o, ix) => (
          <MenuItem key={ix} value={ix}>
            {o}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
