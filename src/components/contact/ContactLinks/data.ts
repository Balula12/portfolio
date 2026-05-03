import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

export type ContactChannel = {
  href: string;
  label: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    href: "mailto:contatogubalula@gmail.com",
    label: "Email",
    description: "contatogubalula@gmail.com",
    Icon: Mail,
  },
  {
    href: "https://github.com/Balula12",
    label: "GitHub",
    description: "Balula12",
    Icon: GithubIcon,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/gustavo-balula/",
    label: "LinkedIn",
    description: "gustavo-balula",
    Icon: LinkedinIcon,
    external: true,
  },
  {
    href: "https://wa.me/5513996064949",
    label: "WhatsApp",
    description: "+55 13 99606-4949",
    Icon: WhatsappIcon,
    external: true,
  },
];
