import React, { useState } from "react";

import { Box, Stack } from "@mui/material";

import { fdate } from "@gh/helper/formating";
import Typography from "@mui/material/Typography";
import WaktuSholat from "./_waktuSholat";

export default function App({ isShowPrayer }) {
  const [clock, setclock] = useState(new Date());

  React.useEffect(() => {
    window.setTimeout(() => {
      setclock(new Date());
    }, 60000);
  }, [clock]);

  return (
    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} width={"100%"} my={2} spacing={5}>
      <Stack minWidth={260}>
        <Typography variant="h3" color="#f24f09">
          {fdate.format3(clock)}
        </Typography>
      </Stack>
      {isShowPrayer && <WaktuSholat />}
    </Stack>
  );
}
