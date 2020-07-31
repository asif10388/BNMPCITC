import React from "react";
import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        class="block text-white text-sm font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <input
        className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        class="block text-white text-sm font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <select
        className="w-full text-black bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
