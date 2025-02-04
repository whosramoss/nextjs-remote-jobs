import { CommonsProps } from "@utils/utils";

export enum ori {
  web = 'hidden sm:block',
  mobile = 'sm:hidden block',
}
interface OrientationProps extends CommonsProps {
  orientation: ori;
}

export function Orientation({
  children,
  orientation,
}: OrientationProps) {

  return (
    <div className={orientation}>
      {children}
    </div>
  );
};
