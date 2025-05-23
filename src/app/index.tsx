import { useSafeRedirect } from "../shared/hooks/useSafeRedirect";

export default function Index() {
  useSafeRedirect('/welcome');

  return null;
}