import { redirect } from "next/navigation";
import Profile_logged from "./profile_logged";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  return <Profile_logged />;
}
  