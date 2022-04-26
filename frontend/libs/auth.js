import { useRouter } from "next/router";

export const adminAuth = (session) => {
  const Router = useRouter();
  if (!session || session.division === false) {
    return Router.back();
  }
};
