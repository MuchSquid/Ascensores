import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DashboardLogged from "./dashboard_logged";

export default async function Dashboard() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = getUser();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  return <DashboardLogged user={(await user).email ?? " "} />;
}
