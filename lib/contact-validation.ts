export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s\d]{7,20}$/;

export function normalizeContactPayload(payload: unknown): ContactFormValues {
  const input = typeof payload === "object" && payload !== null ? payload : {};
  const record = input as Record<string, unknown>;

  return {
    name: String(record.name ?? "").trim(),
    phone: String(record.phone ?? "").trim(),
    email: String(record.email ?? "").trim().toLowerCase(),
    message: String(record.message ?? "").trim(),
  };
}

export function validateContact(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message) {
    errors.message = "Please enter your message.";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
