import { redirect } from "next/navigation";
import Menu_logged from "./menu_logged";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Menu() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  return <Menu_logged />;
}
