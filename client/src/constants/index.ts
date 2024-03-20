import axios from "axios";

export interface User {
  email: string;
  password: string;
}

export let users: User[] = [];

async function fetchUsers() {
  try {
    const response = await axios.get<User[]>(
      "http://localhost:3003/users/findAll"
    );
    users = response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

export default fetchUsers;
