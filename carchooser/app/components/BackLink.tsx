import Link from "next/link";
import { ReactNode } from "react";

interface BackLinkProps {
  href: string;
  children: ReactNode;
}

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex items-center gap-2 text-sm text-purple-600 transition-colors hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-100"
    >
      <span aria-hidden="true">←</span>
      <span>{children}</span>
    </Link>
  );
}
