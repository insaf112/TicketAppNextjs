"use client";

import { useTransition } from "react";
import { deleteTicket } from "../ServerActions";
const DeleteButton = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="btn-primary"
      disabled={isPending}
      onClick={() => startTransition(() => deleteTicket(id))}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteButton;
