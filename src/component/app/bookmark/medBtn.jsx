import UI from "@gh/ui";

export default function App(props) {
  return (
    <UI.Col
      center
      flexGrow={1}
      width={360}
      component="a"
      height={120}
      href={props.to}
      borderRadius={3}
      p={2}
      sx={{
        bgcolor: props.color + ".main",
        "&:hover": {
          bgcolor: props.color + ".dark",
        },
      }}
    >
      <UI.Text bold variant="h4" align="center" color={props.color + ".contrastText"}>
        {props.title}
      </UI.Text>
    </UI.Col>
  );
}
