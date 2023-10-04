import { Outlet } from "react-router-dom";
import UI from "@gh/ui";

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <UI.Col
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#191d26",
        userSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        overflowY: "auto",
        overflowX: "hidden",
        "> div": {
          flexGrow: 1,
        },
      }}
      px={5}
      py={3}
    >
      {children}
    </UI.Col>
  );
}
