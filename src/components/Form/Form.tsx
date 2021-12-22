import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import Text from "@components/Text";

interface Field {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface FormProps extends BoxProps {
  name: string;
  title?: string;
  variant?: string;
  body?: string;
  submitLabel: string;
  fields?: Field[];
}

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Form({
  name,
  title,
  body,
  submitLabel,
  fields,
  ...BoxProps
}: FormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": name,
        ...data,
      }),
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <Box
      component={Paper}
      variant="outlined"
      p={4}
      my={4}
      // elevation={12}
      width={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      {...BoxProps}
    >
      {title && (
        <Typography variant="h3" paragraph>
          {title}
        </Typography>
      )}
      {body && <Text>{body}</Text>}
      <Box
        component="form"
        name={name}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        my={2}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value={name} />
        <div data-netlify-recaptcha="true"></div>
        <Box display="none">
          <label>
            Don’t fill this out: <input {...register("bot-field")} />
          </label>
        </Box>
        {fields?.map((field) => (
          <TextField key={field.id} {...field} {...register(field.name)} />
        ))}
        <Button type="submit" variant="contained" sx={{ height: 56 }}>
          {submitLabel}
        </Button>
      </Box>
    </Box>
  );
}
