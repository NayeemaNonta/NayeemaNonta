import { profile } from "@/data/profile";

import { SmartLink } from "./SmartLink";

export function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          {profile.name} - {profile.role}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <SmartLink className="link-subtle" href={`mailto:${profile.email}`}>
            Email
          </SmartLink>
          <SmartLink className="link-subtle" href="https://github.com/NayeemaNonta">
            GitHub
          </SmartLink>
          <SmartLink className="link-subtle" href="https://www.linkedin.com/in/nayeema-nonta/">
            LinkedIn
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
