import { cn } from "@/lib/utils";

interface ShaderBackgroundProps {
  className?: string;
}

export function ShaderBackground({ className }: ShaderBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("shader-background pointer-events-none absolute inset-0", className)}
    />
  );
}
