import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("Tickets").select();
  if (error) {
    console.log("DATAAAAAAAAAAAAAAA : ", error);
  }
  return data;
};

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets. Yayyy!!!</p>
      )}
    </>
  );
};

export default TicketList;
