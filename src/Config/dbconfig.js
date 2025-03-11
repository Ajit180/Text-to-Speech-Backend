import { createClient } from "@supabase/supabase-js";

import { SUPABASE_URL } from "./serverconfig.js";
import { SUPABASE_API_KEY } from "./serverconfig.js";

const supabase = createClient(SUPABASE_URL,SUPABASE_API_KEY);

export default supabase;