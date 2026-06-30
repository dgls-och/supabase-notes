const SUPABASE_URL = "https://otuhwlxrknopzuzxcqet.supabase.co";
const SUPABASE_KEY = "sb_publishable_VRJYyx2LHRksPZ_i71Vc2g_TcFSsYup";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const getTableData = async (table) => {
  try {
    const { data, error } = await supabaseClient.from(`${table}`).select("*");
    error ? console.error(error) : console.log(data);
  } catch (err) {
    throw err;
  }
};
getTableData("notes");
getTableData("categories");