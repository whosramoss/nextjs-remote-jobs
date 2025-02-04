import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";

export default function Center({ children, className }: CommonsProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {children}
    </div>
  );
}
