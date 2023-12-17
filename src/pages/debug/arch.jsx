import UI from "@gh/ui";

export default function App(props) {
  return (
    <UI.Stack position="relative">
      <UI.Col
        sx={{
          px: { xs: 2, md: 3 }, // = 16px
          alignSelf: "center",
          justifySelf: "flex-end",
          bgcolor: "#7463dc",
          height: "64px",
          width: "100%",
          position: "absolute",
          bottom: 0,
          "&::after": {
            position: "absolute",
            content: `""`,
            top: -10,
            left: "-10%",
            width: "120%",
            height: "20px",
            bgcolor: "#191d26",
            "border-radius": "50%",
          },
        }}
      ></UI.Col>
      <div
        style={{
          p: 16,
          px: 2,
          backgroundColor: "red",
        }}
      ></div>
    </UI.Stack>
  );
}
