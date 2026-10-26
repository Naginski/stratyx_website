import mark from "@/assets/stratyx-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={mark} alt="" className="logo-white h-8 w-auto" />
      <span className="font-brand text-xl font-extrabold tracking-[0.04em] text-white">
        STRATYX
      </span>
    </span>
  );
}
