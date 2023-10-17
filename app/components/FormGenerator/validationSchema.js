import * as yup from "yup";
export function createYupSchema(schema, config) {
  const { name, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type, message, matchesMsg, custom = false } = validation;
    if (!validator[type]) {
      return;
    }
    if (type === "matches") {
      validator = validator[type](
        params,
        `Invalid ${config.label}. ${matchesMsg ? matchesMsg : ""} `
      );
    } else if (type === "max") {
      validator = validator[type](params, message);
    } else if (type === "min") {
      validator = validator[type](params, message);
    } else if (type === "required") {
      validator = validator[type](`${config.label} is required. `);
    } else if (type === "integer") {
      validator = validator[type](
        custom ? message : `${config.label} value should be whole number. `
      );
    } else {
      validator = validator[type]();
    }
  });
  schema[name] = validator;

  return schema;
}
