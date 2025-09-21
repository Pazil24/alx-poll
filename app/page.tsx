import { redirect } from "next/navigation";

export default function Home() {
  redirect("/polls");

  // This part will not be rendered as redirect will take effect
  return null;
}
