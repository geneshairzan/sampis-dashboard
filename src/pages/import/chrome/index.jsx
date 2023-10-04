import UI from "@gh/ui";
import ChromeImport from "./chromeImport";

export default function App(props) {
  return (
    <UI.Stack spacing={2}>
      <UI.Text variant="h2" color="white" bold>
        Chrome Bookmark Import
      </UI.Text>

      <UI.Text variant="h4" color="white">
        How to import ?
      </UI.Text>
      <UI.Text variant="h4" color="white">
        1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </UI.Text>
      <UI.Text variant="h4" color="white">
        2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </UI.Text>
      <UI.Text variant="h4" color="white">
        3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </UI.Text>
      <ChromeImport />
    </UI.Stack>
  );
}
