import React, { useState, useEffect } from "react";

import UI from "@gh/ui";
import Form from "@gh/form";
import Icon from "@gh/icon";
import h from "@gh/helper";

import { useFormik } from "formik";
import * as yup from "yup";
import Context from "@context";
import NewForm from "./_form";

const validationSchema = yup.object({
  name: yup.string("").required("required"),
  path: yup.string("").required("required"),
  group: yup.string("").required("required"),
});

export default function App({ El }) {
  const [modalopen, setmodalopen] = useState(false);

  return (
    <UI.Stack>
      <UI.Row justifyContent="flex-end" spacing={2} onClick={() => setmodalopen(true)}>
        {El || <UI.IconButton color="pwhite" size="small" >
          <Icon.Gear />
        </UI.IconButton>}
      </UI.Row>
      {modalopen && <NewForm onClose={() => setmodalopen(false)} />}
    </UI.Stack>
  );
}
