import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";
import h from "@gh/helper";

import { useFormik } from "formik";
import * as yup from "yup";
import Context from "@context";
import BackupRestore from "./backuprestore";

const validationSchema = yup.object({
  // name: yup.string("").required("required"),
  // path: yup.string("").required("required"),
  // group: yup.string("").required("required"),
});

export default function NewForm({ onClose, refdata }) {
  const { app, setapp } = React.useContext(Context);
  let getBookmarks = browser.bookmarks.get(
    idOrIdList // string or string array
  );

  console.log(getBookmarks);

  return (
    <UI.Modal open={true}>
      <UI.Col
        spacing={2}
        sx={{
          minWidth: 600,
          bgcolor: "white",
          p: 3,
        }}
      >
        <UI.Row justifyContent="space-between">
          <UI.Text variant="h4" color="primary" bold>
            Settings
          </UI.Text>
          <UI.IconButton onClick={onClose}>
            <Icon.Close />
          </UI.IconButton>
        </UI.Row>
        <Form.SearchTag
          label="Serach Tag"
          searchtag
          value={app?.searchtag || []}
          onChange={(e) => setapp({ ...app, searchtag: e.target.value })}
        />
        <Form.Switch
          value={app?.isShowPrayer}
          onChange={(e) => setapp({ ...app, isShowPrayer: e.target.value })}
          label="show prayer widget"
        />

        <BackupRestore />
      </UI.Col>
    </UI.Modal>
  );
}
