import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";
import h from "@gh/helper";

import { useFormik } from "formik";
import * as yup from "yup";
import Context from "@context";

const validationSchema = yup.object({
  // name: yup.string("").required("required"),
  // path: yup.string("").required("required"),
  // group: yup.string("").required("required"),
});

export default function NewForm({ onClose, refdata }) {
  const { app, setapp } = React.useContext(Context);

  const formik = useFormik({
    initialValues: {
      searchtag: app?.searchtag || [],
      isShowPrayer: app?.isShowPrayer
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setapp({ ...app, ...values })
      onClose(true);
    },
  });
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
          <UI.IconButton color="lOrang" onClick={onClose}>
            <Icon.Close />
          </UI.IconButton>
        </UI.Row>
        <Form.SearchTag
          label="Serach Tag"
          name="searchtag"
          searchtag
          value={formik.values.searchtag}
          onChange={formik.handleChange}

        />
        <Form.Switch value={formik.values.isShowPrayer} onChange={formik.handleChange} name='isShowPrayer' label='show prayer widget' />
        <UI.Button onClick={formik.handleSubmit}>Complete</UI.Button>
      </UI.Col>
    </UI.Modal>
  );
}
