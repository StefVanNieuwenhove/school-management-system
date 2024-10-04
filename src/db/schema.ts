export type Student = {
  id: string;
  name: string;
  email: string;
  age: number;
  class: Class;
};

export type Class = {
  id: string;
  name: string;
  students?: Student[];
};
