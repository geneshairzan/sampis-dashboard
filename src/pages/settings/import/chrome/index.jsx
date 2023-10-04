import UI from "@gh/ui";
import ChromeImport from "./chromeImport";

export default function App(props) {
  return (
    <UI.Stack spacing={2}>
      <UI.Text variant="h2" bold>
        Chrome Bookmark Import
      </UI.Text>

      <UI.Text variant="h4">How to import ?</UI.Text>
      <UI.Text variant="h4">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
      <UI.Text variant="h4">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
      <UI.Text variant="h4">3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
      <ChromeImport />
    </UI.Stack>
  );
}
