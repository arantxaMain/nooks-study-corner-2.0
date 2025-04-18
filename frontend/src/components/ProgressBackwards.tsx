import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../lib/utils"

const ProgressBackwards = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-matcha transition-all"
      style={{ transform: `translateX(-${value || 0}%)` }}
    />
  </ProgressPrimitive.Root>
))
ProgressBackwards.displayName = ProgressPrimitive.Root.displayName

export { ProgressBackwards }
