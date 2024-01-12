export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

// 로그인페이지 (제작예정)로 redirect 해줘야함
export const config = { matcher: ["/serverside"] };
