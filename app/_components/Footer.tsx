import { Github } from "lucide-react";
import IslandContainer from "./IslandContainer";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center space-y-4 border-t pt-10 border-zinc-100">
      <p className="text-sm font-mono text-zinc-500">
        This demo site was create by Corbin Jensen to demo the use of:
      </p>
      <ul className="font-mono text-sm text-zinc-500 grid grid-cols-2 md:grid-cols-3 gap-6 ">
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>REST API&apos;s</li>
        <li>React Server Components</li>
        <li>Client Side Components</li>
      </ul>

      <a
        href="https://github.com/corbinmj16/shoppy"
        target="_blank"
        className="text-zinc-500 hover:text-zinc-700"
      >
        <IslandContainer>
          <Github />
        </IslandContainer>
      </a>
    </footer>
  );
}
