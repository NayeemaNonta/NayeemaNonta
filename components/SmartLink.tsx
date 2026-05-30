import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { isExternalHref } from "@/lib/utils";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function SmartLink({ href, children, className, ...props }: SmartLinkProps) {
  if (isExternalHref(href)) {
    const opensNewTab = href.startsWith("http");

    return (
      <a
        {...props}
        href={href}
        className={className}
        target={opensNewTab ? "_blank" : props.target}
        rel={opensNewTab ? "noreferrer" : props.rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={props["aria-label"]} aria-current={props["aria-current"]}>
      {children}
    </Link>
  );
}
