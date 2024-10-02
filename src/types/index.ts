export type Link = {
  href: string;
  name: string;
  icon: React.ReactNode;
  subLinks?: Link[];
};
