import React from "react";
import UI from "@gh/ui";
import Context from "@context";

export default function App(props) {
  const { bm } = React.useContext(Context);
  function handleOrder() {
    let temp = bm.data.map((d, ix) => ({ ...d, order: d?.order || ix }));
    bm.set([...temp]);
    //
  }

  return (
    <UI.Stack>
      <UI.Button onClick={handleOrder}>Set Order</UI.Button>
    </UI.Stack>
  );
}
