export type Link = {
  href: string;
  name: string;
  icon: React.ReactNode;
  subLinks?: Link[];
};

export type CreateClassFormData = {
  name: string;
};

export type FormResponse = {
  type: 'success' | 'error';
  message: string;
};
