import { Stack } from "@mui/material";
import _ from "lodash";

export default function App(props) {
  return (
    <Stack
      direction={"column"}
      alignItems={props.center ? "center" : ""}
      justifyContent={props.center ? "center" : ""}
      {..._.omit(props, ["center"])}
    >
      {props.children}
    </Stack>
  );
}
