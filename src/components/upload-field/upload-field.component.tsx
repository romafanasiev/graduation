import React, { useState } from "react";
import { Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
};

const UploadField: React.FC<Props> = function UploadField({ setFieldValue }) {
  const [fileName, setFileName] = useState("Choose photo");

  return (
    <Button
      color="button"
      variant="contained"
      component="label"
      fullWidth
      sx={{ margin: "24px 0 0" }}
      endIcon={<PhotoCamera color="inherit" />}
    >
      {fileName}
      <input
        hidden
        accept="image/*"
        multiple
        type="file"
        id="file"
        name="file"
        onChange={(event) => {
          if (event.target.files) {
            setFileName(event.target.files[0].name);
            setFieldValue("file", event.target.files[0]);
          }
        }}
      />
    </Button>
  );
};

export default UploadField;
