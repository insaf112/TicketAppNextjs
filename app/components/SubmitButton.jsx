"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn-primary" disabled={pending}>
      {pending ? <span>Adding...</span> : <span>Add Ticket</span>}
    </button>
  );
};

export default SubmitButton;
