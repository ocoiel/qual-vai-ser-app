import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const useSupabaseInServerSide = () => {
  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });

  return { supabase };
};
