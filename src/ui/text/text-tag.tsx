import { CommonsProps } from "@utils/utils";

interface TextProps extends CommonsProps {
  tag?: string
}

export function Text({ tag = 'div', className, children }: TextProps) {

  const map: { [key: string]: React.FC<CommonsProps> } = {
    'div': () => <div className={className}>{children}</div>,
    'span': () => <span className={className}>{children}</span>,
    'b': () => <b className={className}>{children}</b>,
    'br': () => <br />,
  };

  const Component = map[tag] || null;

  return Component ? <Component /> : <div>Component not found</div>;
}