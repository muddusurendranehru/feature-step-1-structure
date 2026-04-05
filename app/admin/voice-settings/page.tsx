import { redirect } from "next/navigation";

export default function AdminVoiceSettingsRedirect() {
  redirect("/dashboard/voice-settings");
}
