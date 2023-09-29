import React, { useState } from "react";

import UI from "@gh/ui";
import Icon from "@gh/icon";
import QrReader from "react-qr-scanner";
import Label from "./label";

export default function App({ onChange, triggerEl, noLabel = false, ...props }) {
  const [onScan, setonScan] = useState(false);

  function handleScan(res) {
    if (res?.text) {
      onChange(res?.text);
    }
  }
  return (
    <UI.Col>
      {!noLabel && <Label label={props.label} tip={props?.tip} />}
      <UI.Row width="100%">
        {triggerEl || (
          <UI.IconButton onClick={() => setonScan(true)}>
            <Icon.Qrscan />
          </UI.IconButton>
        )}
      </UI.Row>
      <UI.Modal open={onScan} onClose={() => setonScan(false)}>
        <QrReader onError={(err) => console.log(err)} onScan={handleScan} />
      </UI.Modal>
    </UI.Col>
  );
}
