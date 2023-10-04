import UI from "@gh/ui";
import BackupRestore from "@component/app/settings/backuprestore";

export default function App(props) {
  return (
    <UI.Stack spacing={3}>
      <UI.Text variant="h4" bold color="primary">
        Backup & Restore
      </UI.Text>
      <BackupRestore />
    </UI.Stack>
  );
}
