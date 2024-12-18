import { Database } from "@/lib/database.types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

export const  supabaseRouteHandlerClient =()=>{
    cookies().getAll();
    return createRouteHandlerClient<Database>({cookies});
}


// import { Database } from "@/lib/database.types";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export const supabaseRouteHandlerClient = () => {
//     const cookieStore = cookies();  // Cookieストアを取得
//     return createRouteHandlerClient<Database>({
//         cookies: () => cookieStore  // cookiesオブジェクトを渡す
//     });
// };
