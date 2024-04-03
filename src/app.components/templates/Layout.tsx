import { maxWidth } from "@/app.resources/constants";
import TopNavBar from "@components/organisms/layout/TopNavBar";
import Head from "next/head";
import type { ReactNode } from "react";

type TProps = {
  headers?: {
    title?: string;
    desc?: string;
    additionalHeads?: ReactNode;
  };
  children?: ReactNode;
};

export default function Layout({ headers, children }: TProps) {
  const { title, desc, additionalHeads } = headers || {};

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
        {additionalHeads}
      </Head>
      <>
        <TopNavBar />
        <main style={{ maxWidth, margin: "0 auto", padding: "0 20px" }}>
          {children}
        </main>
      </>
    </>
  );
}
