import React, { useRef, useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";

import { useArray } from "gh-usereact/hook";
import { helper as h } from "gh-usereact";
import Context from "@context";
import htmlToJson from "./_htmlToJson";
import { Pagination } from "@mui/material";

export default function App(props) {
  const inputRef = useRef();
  const [rawbookmark, setrawbookmark] = useState();

  function handleChange(e) {
    let file = e.target.files[0];
    e.target.value = null;

    if (file) {
      // Use the FileReader API to read the file content
      const reader = new FileReader();
      reader.onload = (x) => {
        const content = x.target.result;
        setrawbookmark(htmlToJson(content));
      };

      reader.readAsText(file);
    }
  }

  return (
    <>
      <UI.Col spacing={1}>
        <UI.Text variant="h5">How to import ?</UI.Text>
        <UI.Text variant="body1">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
        <UI.Text variant="body1">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
        <UI.Text variant="body1">3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</UI.Text>
        <UI.Row>
          <UI.Button onClick={() => setrawbookmark(null, inputRef?.current.click())}>
            {!rawbookmark ? "Start Import" : "Re Import"}
          </UI.Button>
        </UI.Row>
      </UI.Col>
      <input type="file" onChange={handleChange} ref={inputRef} hidden />
      {rawbookmark && <RenderList data={rawbookmark} onReset={() => setrawbookmark()} />}
    </>
  );
}

function RenderList({ data, onReset }) {
  const { bm } = React.useContext(Context);
  let raw = useArray(data.filter(rawFilter).map(rawmap));
  const [allcheck, setallcheck] = useState(false);

  const [paginate, setpaginate] = useState({
    perpage: 20,
    current: 2,
  });

  useEffect(() => {
    setallcheck(!raw.data.find((d) => d.checked == false)?.name);
  }, [raw.data]);

  function rawFilter(d) {
    return !d.url.includes("chrome://");
  }

  function rawmap(d, ix) {
    return {
      _ix: ix,
      id: h.date.id,
      name: d.title,
      path: d.url,
      checked: false,
      isShow: true,
      group: 1,
    };
  }

  function handleAdd() {
    onReset();
    bm.set([...bm.data, ...raw.data.filter((d) => d.checked)]);
  }

  function toggleAll() {
    raw.set(raw.data.map((d) => ({ ...d, checked: !allcheck })));
  }

  return (
    <UI.Col spacing={2}>
      <UI.Row alignItems="center" spacing={2}>
        <UI.Row width={"40%"} spacing={2}>
          <UI.Row width={36}>
            <Form.Checkbox onChange={toggleAll} value={allcheck} />
          </UI.Row>
          <UI.Text variant="h6" width="100%">
            Title / Name
          </UI.Text>
        </UI.Row>

        <UI.Text variant="h6" width="30%">
          Path
        </UI.Text>
        <UI.Text variant="h6" width="10%">
          Group
        </UI.Text>
        <UI.Text variant="h6" width="20%">
          Default Show
        </UI.Text>
      </UI.Row>
      <UI.Col maxHeight={600} overflow="auto" position="relative">
        {raw.data.slice(paginate.current, paginate.perpage).map((d, ix) => (
          <ListItem
            data={d}
            key={ix}
            onChange={(field, value) => raw.handleInput(d._ix, field, value)}
            onDelete={() => raw.pop(d._ix)}
          />
        ))}
      </UI.Col>
      <UI.Row justifyContent="space-between" alignItems="flex-end">
        <Form.Select
          label="per page"
          options={[20, 50, 100]}
          value={paginate.perpage}
          onChange={(e) => setpaginate({ ...paginate, perpage: e.target.value })}
        />
        <Pagination
          count={Math.ceil(raw.data.length / paginate.perpage)}
          page={paginate.current}
          onChange={(e, v) => setpaginate({ ...paginate, current: v })}
        />
      </UI.Row>
      <UI.Row spacing={2} height={32} width="100%">
        <UI.Button fullWidth onClick={handleAdd} disabled={!raw.data.filter((d) => d.checked).length}>
          Import {raw.data.filter((d) => d.checked).length} item into Bookmark
        </UI.Button>
      </UI.Row>
    </UI.Col>
  );
}

function ListItem({ data, onChange, onDelete }) {
  return (
    <UI.Row spacing={2} width="100%">
      <UI.Row width={"40%"} spacing={2}>
        <Form.Checkbox value={data.checked} onChange={(e) => onChange("checked", e.target.value)} />
        <UI.Col width="100%">
          <Form.Text
            value={data.name}
            sx={{
              bgcolor: "white",
            }}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </UI.Col>
      </UI.Row>

      <UI.Col width="30%">
        <Form.Text
          value={data.path}
          onChange={(e) => onChange("path", e.target.value)}
          sx={{
            bgcolor: "white",
          }}
        />
      </UI.Col>
      <UI.Col width="10%">
        <Form.BMGroup
          name="group"
          value={data.group}
          onChange={(e) => onChange("group", e.target.value)}
          sx={{
            bgcolor: "white",
          }}
        />
      </UI.Col>
      <UI.Row width="20%">
        <Form.Select
          fullWidth
          sx={{
            bgcolor: "white",
          }}
          options={["Yes", "No"]}
          value={data.isShow ? "Yes" : "No"}
          onChange={(e) => onChange("isShow", e.target.value == "Yes")}
        />
        <UI.IconButton onClick={onDelete}>
          <Icon.Close color="error" />
        </UI.IconButton>
      </UI.Row>
    </UI.Row>
  );
}
