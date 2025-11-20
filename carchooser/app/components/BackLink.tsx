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
      className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-100 transition-colors mb-6"
    >
      <span aria-hidden="true">←</span>
      <span>{children}</span>
    </Link>
  );
}
