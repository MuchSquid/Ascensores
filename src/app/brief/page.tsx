import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Brief_logged from "./brief_logged";


export default async function Brief() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return <Brief_logged />;
}
