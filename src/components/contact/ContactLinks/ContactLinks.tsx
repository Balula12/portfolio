import { ContactLink } from "./ContactLink";
import { CONTACT_CHANNELS } from "./data";

export function ContactLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {CONTACT_CHANNELS.map((channel) => (
        <ContactLink key={channel.href} {...channel} />
      ))}
    </div>
  );
}
