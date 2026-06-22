import Link from "next/link";

/* Page width container */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/* Small uppercase gold label with a rule */
export function Eyebrow({
  children,
  className = "",
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "items-center" : "items-start"} ${className}`}
    >
      <span className="eyebrow">{children}</span>
      <span className="rule" />
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
  className?: string;
};

/* Shared CTA button (renders as an anchor/link) */
export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";
  const variants = {
    primary:
      "bg-maroon text-paper shadow-[0_10px_30px_-12px_rgba(110,42,42,0.7)] hover:bg-maroon-dark hover:-translate-y-0.5",
    outline:
      "border border-line-strong text-ink hover:border-gold hover:text-gold bg-transparent",
    light:
      "bg-paper text-maroon hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.5)]",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
