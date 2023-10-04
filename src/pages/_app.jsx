import { Outlet, useLocation } from "react-router-dom";
import UI from "@gh/ui";

import MainLayout from "@component/layout/bookmark-theme";
import SettingLayout from "@/component/layout/setting";

export default function App() {
  const loc = useLocation();

  if (loc.pathname.includes("settings")) {
    return (
      <SettingLayout>
        <Outlet />
      </SettingLayout>
    );
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
