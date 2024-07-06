import Link from "next/link";

export function Coffee(): JSX.Element {
  return <Link href="https://buymeacoffee.com/jakebloom" target="_blank" className="border border-blue px-4 py-2 rounded-full cursor-pointer">
    Enjoying the app? Buy me a coffee! ☕️
  </Link>
}