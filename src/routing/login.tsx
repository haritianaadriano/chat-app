import { useRouter } from "next/router";

export function moveToSignup() {
    const router = useRouter();
    router.push("/signup");
  }