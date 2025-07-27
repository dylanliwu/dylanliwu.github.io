import { ArrowUpRight } from "lucide-react";

export default function ContactBox() {
  return (
    <div className="box w-1/2 flex h-[34svh] items-end group relative hover:scale-101 transition-all">
        <h1 className="text-6xl">Contact Me</h1>
        <ArrowUpRight size={60} className="absolute top-4 right-4 group-hover:scale-150 transition-all" />
    </div>
  );
}