import React, { useRef, useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";

import { useArray } from "gh-usereact/hook";
import { helper as h } from "gh-usereact";
import Context from "@context";

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
        setrawbookmark(htmlToJSON(content));
      };

      reader.readAsText(file);
    }
  }
  return (
    <>
      <UI.Button fullWidth onClick={() => inputRef?.current.click()}>
        Start Import
      </UI.Button>
      <input type="file" onChange={handleChange} ref={inputRef} hidden />
      {rawbookmark && <RenderList data={rawbookmark} onReset={() => setrawbookmark()} />}
    </>
  );
}

function htmlToJSON(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const bookmarks = [];

  const bookmarkElements = doc.querySelectorAll("a");
  bookmarkElements.forEach((bookmark) => {
    const title = bookmark.textContent;
    const url = bookmark.getAttribute("href");
    const addDate = parseInt(bookmark.getAttribute("ADD_DATE"), 10) * 1000; // Convert to milliseconds
    const iconUri = bookmark.getAttribute("ICON_URI");
    const lastModified = parseInt(bookmark.getAttribute("LAST_MODIFIED"), 10) * 1000; // Convert to milliseconds

    bookmarks.push({
      title,
      url,
      addDate,
      iconUri,
      lastModified,
    });
  });

  return bookmarks;
}

function RenderList({ data, onReset }) {
  const { bm } = React.useContext(Context);
  let raw = useArray(data.filter(rawFilter).map(rawmap));
  const [allcheck, setallcheck] = useState(false);

  const paginate = {
    perpage: 20,
    current: 2,
  };

  useEffect(() => {
    setallcheck(!raw.data.find((d) => d.checked == false)?.name);
  }, [raw.data]);

  function rawFilter(d) {
    return !d.url.includes("chrome://");
  }

  function rawmap(d, ix) {
    return {
      _ix: ix,
      name: d.title,
      path: d.url,
      checked: false,
      isShow: false,
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
      <UI.Button onClick={onReset}>Clear</UI.Button>

      <UI.Col>
        <UI.Row alignItems="center" spacing={2}>
          <UI.Col width={36}>
            <Form.Checkbox onChange={toggleAll} value={allcheck} />
          </UI.Col>

          <UI.Text variant="h6" color="white" width="20%">
            Title / Name
          </UI.Text>
          <UI.Text variant="h6" color="white" width="20%">
            Path
          </UI.Text>
          <UI.Text variant="h6" color="white" width="20%">
            Group
          </UI.Text>
        </UI.Row>
        {raw.data.slice(paginate.current, paginate.perpage).map((d, ix) => (
          <ListItem
            data={d}
            key={ix}
            onChange={(field, value) => raw.handleInput(d._ix, field, value)}
            onDelete={() => raw.pop(d._ix)}
          />
        ))}
      </UI.Col>
      <UI.Button onClick={handleAdd}>Add To Bookmark</UI.Button>
    </UI.Col>
  );
}

function ListItem({ data, onChange, onDelete }) {
  return (
    <UI.Row spacing={2} width="100%">
      <Form.Checkbox value={data.checked} color="white" onChange={(e) => onChange("checked", e.target.value)} />
      <UI.Col width="20%">
        <Form.Text
          value={data.name}
          sx={{
            bgcolor: "white",
          }}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </UI.Col>
      <UI.Col width="20%">
        <Form.Text
          value={data.path}
          onChange={(e) => onChange("path", e.target.value)}
          sx={{
            bgcolor: "white",
          }}
        />
      </UI.Col>
      <UI.Col width="20%">
        <Form.BMGroup
          name="group"
          value={data.group}
          onChange={(e) => onChange("group", e.target.value)}
          sx={{
            bgcolor: "white",
          }}
        />
      </UI.Col>
      <UI.IconButton onClick={onDelete}>
        <Icon.Close color="error" />
      </UI.IconButton>
    </UI.Row>
  );
}
