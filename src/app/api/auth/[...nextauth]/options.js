import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import mockImage from "/public/images/room-1.jpg";

const refreshTokenApiCall = async (token) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/refresh";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      RefreshToken: token.refreshToken,
    },
  });
  if (res.ok) {
    // const data = await res.json();
    const accessToken = res.headers.get("NewAccessToken");
    const expTime = res.headers.get("expTime");
    return {
      ...token,
      accessToken,
      expTime: Date.now() + parseInt(expTime) * 1000 - 2000,
    };
  } else {
    return {
      error: "RefreshTokenTokenError",
    };
  }
};

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/token";
        const formData = new URLSearchParams();
        formData.append("username", credentials.email);
        formData.append("password", credentials.password);
        const data = {
          username: "johndoe@example.com",
          password: "password123",
        };
        // api 통신을통해 유저존재 체크
        const res = await fetch(url, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          return await res.json();
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/github/token",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              githubId: user.id,
              email: user.email,
              name: user.name,
              accessToken: account.accessToken,
            }),
          },
        );

        if (response.ok) {
          const data = await response.json();
          user.access_token = data.access_token;
          user.refresh_token = data.refresh_token;
          user.expires_in = data.expires_in;
        } else {
          return false;
        }
      }

      return true;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.userId = token.userId;
      session.user.image = mockImage;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.refreshToken = user.refreshToken;
        token.accessToken = user.accessToken;
        token.expTime = Date.now() + parseInt(user.expTime) * 1000 - 2000;
        token.userId = user.userId;
      }
      if (Date.now() < token.expTime) {
        return token;
      }
      return await refreshTokenApiCall(token);
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
