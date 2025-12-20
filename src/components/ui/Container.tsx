import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export default function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        size === "default" ? "max-w-5xl" : "max-w-6xl",
        className
      )}
      {...props}
    />
  );
}
