import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/constants";
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "255567571899-iblhh893spf9shrk6hcfsg5qfo3dkbsv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const currentUser = users.find(
          (user) => user.email === credentials.email
        );
        if (currentUser && currentUser.password === credentials?.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
