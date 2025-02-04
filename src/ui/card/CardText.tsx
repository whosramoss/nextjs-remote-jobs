import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";

export default function CardText({ className, children }: CommonsProps) {
  return (
    <h4
      className={cn(
        "py-2 text-xl text-secondary dark:text-black lg:text-3xl",
        className,
      )}
    >
      {children}
    </h4>
  );
}
