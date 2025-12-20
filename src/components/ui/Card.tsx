import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft";
};

export default function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-sm",
        variant === "soft" && "bg-[#fefbe9]",
        className
      )}
      {...props}
    />
  );
}
