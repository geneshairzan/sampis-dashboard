import React, { useRef, useState, useEffect } from "react";

import Label from "@gh/form/label";

import UI from "@gh/ui";
import Icon from "@gh/icon";
import Context from "@context";
import BackupIcon from "@mui/icons-material/Backup";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Link } from "react-router-dom";

export default function App(props) {
  return (
    <UI.Stack spacing={2}>
      <Label label="Backup & Restore" tip={props.tip} />

      <UI.Row spacing={2}>
        <Backup />
        <Restore />
      </UI.Row>
      <UI.Row spacing={2}>
        <Reset />
        <UI.Button fullWidth LinkComponent={Link} to="/import/chrome" target="_blank" rel="noopener noreferrer">
          Chrome Import
        </UI.Button>
      </UI.Row>
    </UI.Stack>
  );
}

function Backup() {
  const { bm, app } = React.useContext(Context);
  const [hasBackup, sethasBackup] = useState();

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({
        title: "gh-bookmark-manager",
        setting: app,
        bookmark: bm.data,
      })
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
    sethasBackup(true);
  };

  return (
    <UI.Button fullWidth color="secondary" startIcon={hasBackup ? <Icon.Check /> : <BackupIcon />} onClick={exportData}>
      {hasBackup ? "complete" : "backup"}
    </UI.Button>
  );
}

function Restore() {
  const ref = useRef();
  const { bm, app } = React.useContext(Context);
  const [hasRestore, sethasRestore] = useState(false);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      sethasRestore(true);
      let raw = JSON.parse(e.target.result);
      bm.set(raw.bookmark);
      app.setapp(raw.setting);
    };
  };

  return (
    <>
      <input type="file" onChange={handleChange} style={{ display: "none" }} ref={ref} />
      <UI.Button
        fullWidth
        color="secondary"
        variant="outlined"
        startIcon={hasRestore ? <Icon.Check /> : <CloudDownloadIcon />}
        onClick={() => ref.current.click()}
      >
        {hasRestore ? "data restored" : "Restore"}
      </UI.Button>
    </>
  );
}

function Reset(params) {
  const [hasReset, sethasReset] = useState(false);
  function handleReset() {
    localStorage.clear();
    sethasReset(true);
  }
  return (
    <UI.ActionConfirm
      title="Are your sure want to reset ? "
      desc="after reset, every data will removed permanently !"
      fullWidth
      color="error"
      onClick={handleReset}
    >
      {hasReset ? "Complete !" : "Reset"}
    </UI.ActionConfirm>
  );
}
