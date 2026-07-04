import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { ArrowIcon } from "@utils/icons";

const ContactCard = ({
  href,
  external,
  icon,
  label,
  value,
  helper,
}: {
  href: string;
  external?: boolean;
  icon: ReactNode;
  label: string;
  value: string;
  helper: string;
}) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      transition={{ type: "spring", duration: 0.3, bounce: 0.15 }}
      className="group flex h-full items-center gap-5 rounded-3xl border border-transparent bg-surface p-4 md:p-7 shadow-soft transition-shadow duration-300 hover:shadow-accent"
    >
      <span className="bg-accent/10 text-accent flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
        {icon}
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
          {label}
        </span>

        <span className="text-accent block truncate text-lg font-medium">
          {value}
        </span>

        <span className="block text-sm text-muted">{helper}</span>
      </span>

      <span className="text-accent shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">
        <ArrowIcon className="h-6 w-6" />
      </span>
    </motion.a>
  );
};

export default ContactCard;
