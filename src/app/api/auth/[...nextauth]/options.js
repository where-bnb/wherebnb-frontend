import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "tokenUpdate",
      name: "tokenUpdate",
      async authorize({ credentials }) {
        console.log("credentials updated: ", credentials);
        return credentials;
      },
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/token";
        const formData = new URLSearchParams();
        formData.append("username", credentials.email);
        formData.append("password", credentials.password);
        // api 통신을통해 유저존재 체크
        const res = await fetch(url, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        if (res.ok) {
          const accessToken = res.headers.get("Authorization");
          const body = await res.json();
          return { ...body, accessToken: accessToken };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt 실행", user);

      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
        token.refreshToken = user.user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("session 실행", token);
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
