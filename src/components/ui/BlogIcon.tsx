import { RiGitPullRequestLine, RiApps2Line } from "@remixicon/react";

type BlogIconType = "technology" | "no-ai" | "any";

interface BlogIconProps {
  blogIconText: BlogIconType;
}

export default function BlogIcon({ blogIconText }: BlogIconProps) {
  switch (blogIconText) {
    case "technology":
      return <RiGitPullRequestLine className="mr-2"/>;
    case "no-ai":
      return <img className="mr-1 w-8" src="/no-ai.svg" alt="No AI" />;
    case "any":
    default:
      return <RiApps2Line className="mr-2" />;
  }
}
