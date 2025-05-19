import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/welcome");
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}