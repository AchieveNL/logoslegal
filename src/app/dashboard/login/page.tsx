import { isCmsConfigured } from "@/lib/payload";
import LoginForm from "./LoginForm";

export default function DashboardLoginPage() {
  return <LoginForm cmsReady={isCmsConfigured()} />;
}
