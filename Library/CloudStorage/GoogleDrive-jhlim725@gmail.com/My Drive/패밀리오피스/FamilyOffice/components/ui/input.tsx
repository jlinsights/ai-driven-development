import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-sm border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg-secondary px-3 py-2 text-sm text-light-text-primary dark:text-dark-text-primary shadow-sm transition-fo",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-light-text-tertiary dark:placeholder:text-dark-text-tertiary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
