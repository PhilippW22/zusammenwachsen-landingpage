import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerSize?: "default" | "wide";
  tone?: "plain" | "soft";
  fade?: "none" | "top" | "bottom" | "both";
};

export default function Section({
  className,
  children,
  containerSize = "default",
  tone = "plain",
  fade = "none",
  ...props
}: SectionProps) {
  const isSoft = tone === "soft";

  return (
    <section
      className={cn(
        "relative py-14 md:py-20",
        isSoft ? "bg-[#fefbe9]" : "bg-white",
        className
      )}
      {...props}
    >
      {/* Gradient-Fades */}
      {fade !== "none" && (
        <>
          {(fade === "top" || fade === "both") && (
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-10",
                isSoft
                  ? "bg-gradient-to-b from-white to-transparent"
                  : "bg-gradient-to-b from-[#fefbe9] to-transparent"
              )}
            />
          )}
          {(fade === "bottom" || fade === "both") && (
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 h-10",
                isSoft
                  ? "bg-gradient-to-t from-white to-transparent"
                  : "bg-gradient-to-t from-[#fefbe9] to-transparent"
              )}
            />
          )}
        </>
      )}

      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
