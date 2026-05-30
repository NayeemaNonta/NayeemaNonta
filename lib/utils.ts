export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function assetPath(src: string) {
  if (!src || src.startsWith("http") || src.startsWith("data:") || !src.startsWith("/")) {
    return src;
  }

  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;
}
