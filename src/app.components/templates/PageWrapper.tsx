import Head from "next/head";
import type { ReactNode } from "react";

type TProps = {
  title?: string;
  desc?: string;
  headers?: ReactNode;
  children?: ReactNode;
};

export default function PageWrapper(props: TProps) {
  const { title, desc, headers, children } = props;

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
        {headers}
      </Head>
      {children}
    </>
  );
}
