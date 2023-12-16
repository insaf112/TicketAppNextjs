"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
const addTicket = async function (formData) {
  //   const ticket = Object.fromEntries(formData);
  const ticket = {
    title: formData.get("title"),
    body: formData.get("body"),
    priority: formData.get("priority"),
  };
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase
    .from("Tickets")
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();
  if (!error) {
    redirect("/tickets");
  } else {
    throw new Error("Failed to Add the Ticket");
  }
};
// Delete Ticket Using Server Action
const deleteTicket = async (id) => {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase.from("Tickets").delete().eq("id", id);
  if (!error) {
    revalidatePath("/tickets");
    redirect("/tickets");
  } else {
    throw new Error("Error while deleting ticket");
  }
};
export default addTicket;
export { deleteTicket };
