import { cn } from "@/lib/cn";

type CardVariant = "default" | "accent";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export default function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-colors",
        variant === "default" &&
          "bg-white shadow-sm",
        variant === "accent" &&
          "bg-[#c0897f] text-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}
