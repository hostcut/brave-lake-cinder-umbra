import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const styles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
  {
    variants: {
      tone: {
        sage: "bg-sage text-cream hover:bg-sage-deep",
        ink: "bg-ink text-cream hover:bg-ink-soft",
        cream: "border border-line bg-cream text-ink hover:border-ink",
        quiet: "bg-transparent text-ink hover:bg-cream",
        clay: "bg-clay text-cream hover:bg-ink",
      },
      size: {
        sm: "h-11 px-4 text-sm",
        md: "h-12 px-5 text-base",
        lg: "h-14 px-6 text-lg",
      },
    },
    defaultVariants: { tone: "sage", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & { asChild?: boolean };

export function Button({ asChild, tone, size, className, type = "button", ...props }: Props) {
  const classes = cn(styles({ tone, size }), className);
  if (asChild) return <Slot className={classes} {...props} />;
  return <button type={type} className={classes} {...props} />;
}
