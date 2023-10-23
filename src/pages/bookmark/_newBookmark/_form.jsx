import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";
import h from "@gh/helper";

import { useFormik } from "formik";
import * as yup from "yup";
import Context from "@context";

// const URL =
//   /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
// const regMatch =
//   /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

const isValidUrl = (url) => {
  try {
    if (url.includes("https://localhost") || url.includes("http://localhost")) return true;
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};

const validationSchema = yup.object({
  name: yup.string("").required("required"),
  // path: yup.string().matches(URL, 'Enter valid url!').required("required"),
  // path: yup.string().matches(regMatch, "Enter correct url!").required("required"),
  path: yup.string().test("is-url-valid", "URL is not valid", (value) => isValidUrl(value)),
  group: yup.string("").required("required"),
});

export default function NewForm({ onClose, refdata, primary }) {
  const { bm } = React.useContext(Context);
  const formik = useFormik({
    initialValues: refdata
      ? {
          ...refdata,
          folder: { name: refdata.parent },
        }
      : {
          id: h.date.id_time(),
          name: "",
          path: "",
          group: 1,
          isShow: true,
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.folder) {
        if (refdata) {
        } else {
          let folderObject = bm.getFolder(values.folder);
          if (folderObject) {
            const { folder, ...rest } = values;
            folderObject.bookmarks.push(rest);
            bm.edit(folderObject);
          }
        }
      } else {
        refdata ? bm.edit(values) : bm.push(values);
      }
      onClose(true);
    },
  });

  console.log(formik.values);
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
            {refdata ? "Edit Bookmark" : "New Bookmark"}
          </UI.Text>
          <UI.IconButton onClick={onClose}>
            <Icon.Close />
          </UI.IconButton>
        </UI.Row>
        <Form.Text
          label="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <Form.Text
          label="path"
          name="path"
          value={formik.values.path}
          onChange={formik.handleChange}
          error={formik.touched.path && Boolean(formik.errors.path)}
          helperText={formik.touched.path && formik.errors.path}
        />
        {!primary && (
          <>
            <Form.Text
              label="Desc | Tag"
              name="desc"
              value={formik.values.desc}
              onChange={formik.handleChange}
              error={formik.touched.desc && Boolean(formik.errors.desc)}
              helperText={formik.touched.desc && formik.errors.desc}
            />

            <Form.BMGroup
              label="Group"
              name="group"
              value={formik.values.group}
              onChange={formik.handleChange}
              error={formik.touched.group && Boolean(formik.errors.group)}
              helperText={formik.touched.group && formik.errors.group}
            />

            <Form.InputFolder
              label="Folder"
              name="folder"
              value={formik.values.folder}
              options={bm.data?.filter((bm) => bm.isFolder) || []}
              onChange={formik.handleChange}
              error={formik.touched.folder && Boolean(formik.errors.folder)}
              helperText={formik.touched.folder && formik.errors.folder}
            />

            <Form.Checkbox
              label="show in dashboard"
              name="isShow"
              value={formik.values.isShow}
              onChange={formik.handleChange}
            />
            <Form.Checkbox
              label="disable icon"
              name="isNotIcon"
              value={formik.values.isNotIcon}
              onChange={formik.handleChange}
            />
          </>
        )}

        <UI.Button onClick={formik.handleSubmit}>Complete</UI.Button>
      </UI.Col>
    </UI.Modal>
  );
}
