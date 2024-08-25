import { cookies } from "next/headers";
import { Cookies } from "../types/enum";

const cookiesStore = cookies();

const ACCESS_TOKEN = cookiesStore.get(Cookies.TOKEN)?.value;
const TOKEN_TYPE = cookiesStore.get(Cookies.TOKEN_TYPE)?.value;

export { ACCESS_TOKEN, TOKEN_TYPE };
