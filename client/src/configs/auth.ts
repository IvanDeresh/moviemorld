import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

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
          // Перевірка пароля тут
          // Наприклад, порівнюємо хеші паролів
          // Якщо пароль вірний, повертаємо користувача
          // Якщо пароль невірний, повертаємо null
          return currentUser; // Це приклад. Перевірку пароля потрібно реалізувати самостійно
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
