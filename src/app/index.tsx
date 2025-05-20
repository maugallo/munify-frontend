import { useSafeRedirect } from "../hooks/useSafeRedirect";

export default function Index() {
  useSafeRedirect('/welcome')

  return null;
}