export type Student = {
  id: string;
  name: string;
  email: string;
  age: number;
  class: Class;
  createdAt: Date;
  updatedAt: Date;
};

export type Class = {
  id: string;
  name: string;
  students?: Student[];
  createdAt: Date;
  updatedAt: Date;
};
