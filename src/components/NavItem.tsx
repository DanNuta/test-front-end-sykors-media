type Props = {
  label: React.ReactNode;
  href: string;
} & React.HTMLAttributes<HTMLLIElement>;

export const NavItem = ({ label, href, ...restProps }: Props) => {
  return (
    <li {...restProps}>
      <a href={`/${href}`}>{label}</a>
    </li>
  );
};
