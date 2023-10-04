import UI from "@gh/ui";
import ChromeImport from "./chromeImport";

export default function App(props) {
  return (
    <UI.Stack spacing={2}>
      <UI.Text variant="h4" bold color="primary">
        Chrome Bookmark Import
      </UI.Text>
      <UI.Col spacing={1}>
        <UI.Text variant="h5">How to import ?</UI.Text>
        <UI.Text variant="body1">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
        <UI.Text variant="body1">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
        <UI.Text variant="body1">3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
      </UI.Col>
      <ChromeImport />
    </UI.Stack>
  );
}
