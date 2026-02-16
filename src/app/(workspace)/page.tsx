import { Button } from "@/components/ui/button";
import Image from "next/image";
import { currentUser } from "../modules/authentication/actions";
import UserButton from "../modules/authentication/components/user-button";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <UserButton user={user} />
    </div>
  );
}
