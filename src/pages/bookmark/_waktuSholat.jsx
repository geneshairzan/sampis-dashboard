import React, { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";
import Context from "@context";
// https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/bekasi/2023/02.json
import axios from "axios";

export default function App(props) {
  const [nextisfound, setnextisfound] = useState(false);
  const [data, setdata] = useState();
  const [type, settype] = useState([
    { name: "shubuh" },
    { name: "dzuhur" },
    { name: "ashr" },
    { name: "magrib" },
    { name: "isya" },
  ]);
  let today = new Date();

  async function fetcher(params) {
    let res = await axios({
      url: `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/bekasi/${today.getFullYear()}/${today.toLocaleString(
        "en-US",
        { month: "2-digit" }
      )}.json`,
    });
    setdata(res?.data ? res.data : []);
  }

  useEffect(() => {
    fetcher();
  }, []);

  function finderHelper(d) {
    let dataDate = new Date(d.tanggal).getDate();
    let today = new Date().getDate();
    return dataDate == today;
  }

  function isNext(d1, d2) {
    if (!d1) return true;
    if (!d1 || !d2) return false;
    // 22:33
    let time1 = d1.split(/\:|\-/g); // time1[0] = 22  ; time1[1] = 33
    let time2 = d2.split(/\:|\-/g);

    let c1 = new Date();
    c1.setHours(time1[0]);
    c1.setMinutes(time1[1]);

    let c2 = new Date();
    c2.setHours(time2[0]);
    c2.setMinutes(time2[1]);
    return c1 > today && today < c2;
  }

  useEffect(() => {
    if (data) {
      let temp = type.map((d) => ({
        ...d,
        time: data.find(finderHelper)[d.name],
      }));
      settype([...temp]);
    }
  }, [data]);

  return (
    <Stack
      direction={"row"}
      spacing={5}
      maxWidth="960px"
      flexGrow={1}
      sx={{
        color: "white",
      }}
    >
      {type.map((d, ix) => (
        <Stack
          key={ix}
          sx={{
            flexGrow: 1,
            px: 2,
            border: isNext(type[ix + 1]?.time, type[ix]?.time) && "1px solid #f24f09",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              color: isNext(type[ix + 1]?.time, type[ix]?.time) ? "#f24f09" : "white",
            }}
          >
            {d.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isNext(type[ix + 1]?.time, type[ix]?.time) && "#f24f09",
            }}
          >
            {data?.find(finderHelper)[d.name]}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
