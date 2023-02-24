"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string | null | undefined;
};

export default function Logged({ image }: User) {
  return (
    <li>
      <button onClick={() => signOut()}>Sign Out</button>
      <Link href="/dashboard">
        <Image width={64} height={64} src={image || ""} alt="User image" />
      </Link>
    </li>
  );
}
