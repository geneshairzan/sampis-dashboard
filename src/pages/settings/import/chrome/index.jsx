import UI from "@gh/ui";
import ChromeImport from "./chromeImport";

export default function App(props) {
  return (
    <UI.Stack spacing={2}>
      <UI.Text variant="h4" bold color="primary">
        Chrome Bookmark Import
      </UI.Text>

      <ChromeImport />
    </UI.Stack>
  );
}
