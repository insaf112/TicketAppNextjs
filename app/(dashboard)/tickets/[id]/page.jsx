import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeleteButton from "./DeleteButton";

const getTicketDetails = async (id) => {
  const supabase = createServerComponentClient({ cookies });
  let { data: ticket, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();
  if (!error) {
    return ticket;
  }
};
const TicketDetails = async ({ params }) => {
  const id = params.id;
  const ticket = await getTicketDetails(id);
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {session?.user?.email == ticket.user_email && (
            <DeleteButton id={id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} Priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
