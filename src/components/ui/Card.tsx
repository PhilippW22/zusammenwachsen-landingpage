import { cn } from "@/lib/cn";

type CardVariant = "default" | "accent" | "gradient";

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
        variant === "default" && "bg-white border border-gray-100",
        variant === "accent" && "bg-[#c0897f] text-white shadow-sm",
        variant === "gradient" &&
          "bg-gradient-to-br from-gray-50 to-white border border-gray-100",
        className
      )}
      {...props}
    />
  );
}