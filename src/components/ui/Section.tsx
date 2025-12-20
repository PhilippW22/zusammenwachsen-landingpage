import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerSize?: "default" | "wide";
  tone?: "plain" | "soft";
};

export default function Section({
  className,
  children,
  containerSize = "default",
  tone = "plain",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-14 md:py-20",
        tone === "soft" && "bg-[#fefbe9]",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
