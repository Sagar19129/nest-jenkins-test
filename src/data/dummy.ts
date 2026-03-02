type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam@example.com",
    role: "User",
  },
];

export default users;