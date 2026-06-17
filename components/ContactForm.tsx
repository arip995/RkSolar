"use client";

import { FormEvent, useState } from "react";
import {
  ContactFormErrors,
  ContactFormValues,
  hasValidationErrors,
  validateContact,
} from "@/lib/contact-validation";
import { contactEmail } from "@/lib/site-data";

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitState({ status: "idle", message: "" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContact(values);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      setSubmitState({ status: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string; errors?: ContactFormErrors };

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setValues(initialValues);
      setErrors({});
      setSubmitState({
        status: "success",
        message: "Thank you. RK SOLAR has received your message and will contact you soon.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Name"
          value={values.name}
          error={errors.name}
          placeholder="Your full name"
          onChange={(value) => updateField("name", value)}
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          value={values.phone}
          error={errors.phone}
          placeholder="+91 98765 43210"
          onChange={(value) => updateField("phone", value)}
        />
      </div>

      <div className="mt-5">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          placeholder="you@example.com"
          onChange={(value) => updateField("email", value)}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-extrabold text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your solar installation, consultation, or maintenance needs."
          className={`mt-2 w-full resize-none rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
            errors.message ? "border-red-300" : "border-slate-200"
          }`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm font-semibold text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitState.status !== "idle" ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-bold ${
            submitState.status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {submitState.message}
        </p>
      ) : null}

      <p className="mt-5 text-center text-sm text-slate-500">
        Prefer email? Write directly to{" "}
        <a className="font-bold text-emerald-700 hover:text-orange-500" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  );
}

type FormFieldProps = {
  id: keyof ContactFormValues;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
};

function FormField({
  id,
  label,
  value,
  error,
  placeholder,
  type = "text",
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-extrabold text-slate-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
          error ? "border-red-300" : "border-slate-200"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
