import TopNavBar from "@components/organisms/layout/TopNavBar";
import { maxWidth } from "@resources/constants";
import type { ReactNode } from "react";

type TProps = {
  children?: ReactNode;
};

export default function Layout({ children }: TProps) {
  return (
    <>
      <TopNavBar />
      <main style={{ maxWidth, margin: "0 auto", padding: "0 20px" }}>
        {children}
      </main>
    </>
  );
}
