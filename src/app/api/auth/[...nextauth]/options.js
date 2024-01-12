import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

const refreshTokenApiCall = async (token) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/refresh";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "refresh-token": token.refreshToken,
    },
  });
  if (res.ok) {
    const data = await res.json();
    return {
      ...token,
      error: null,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: Date.now() + parseInt(data.expires_in) * 1000 - 2000,
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
        // api 통신을통해 유저존재 체크
        const res = await fetch(url, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
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
      console.log("signIn 실행");
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
      console.log("session 실행");
      session.accessToken = token.accessToken;
      if (session?.accessToken ?? false) {
        const url = process.env.NEXT_PUBLIC_BASE_URL + "/users/me";
        const userRes = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        if (userRes.ok) {
          const userDetails = await userRes.json();
          session.user = userDetails;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("jwt 실행", token);
      if (user) {
        token.refreshToken = user.refresh_token;
        token.accessToken = user.access_token;
        token.expiresIn = Date.now() + parseInt(user.expires_in) * 1000 - 2000;
      }
      if (Date.now() < token.expiresIn) {
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
