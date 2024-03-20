import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        let users: User[] = [];

        try {
          const response = await axios.get<User[]>(
            "http://localhost:3003/users/findAll"
          );
          users = response.data;
        } catch (error) {
          console.error("Error fetching users:", error);
        }

        if (!credentials?.email || !credentials?.password || !users) {
          return null;
        }

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser) {
          return currentUser;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
