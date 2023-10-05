import UI from "@gh/ui";
import github from "@img/icon/github2.png";

export default function App(props) {
  return (
    <UI.Stack spacing={3}>
      <UI.Text variant="h4" bold color="primary">
        About
      </UI.Text>

      <UI.Col
        component="a"
        href="https://github.com/geneshairzan/sampis-dashboard"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: 100,
        }}
      >
        <img src={github} alt="" />
      </UI.Col>

      <UI.Text>
        any feedback related to this application, please email support at{" "}
        <UI.Text
          component="a"
          href="mailto: bookmark@genesha-dev.com"
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          {`bookmark@genesha-dev.com`}
        </UI.Text>
      </UI.Text>
    </UI.Stack>
  );
}
