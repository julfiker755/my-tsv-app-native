import * as Yup from "yup";

export const getInit = (schema: Yup.ObjectSchema<any>) => {
  const fields = schema.fields;
  const initialValues: Record<string, any> = {};

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (typeof (field as any).default === "function") {
      initialValues[key] = (field as any).default() ?? "";
    } else {
      initialValues[key] = "";
    }
  });

  return initialValues;
};
