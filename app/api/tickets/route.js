import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req) {
  const ticket = await req.json();
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error, data } = await supabase
    .from("Tickets")
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();
  return NextResponse.json({ data, error });
}
