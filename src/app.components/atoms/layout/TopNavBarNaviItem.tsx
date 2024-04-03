import Link from "next/link";
import styled from "styled-components";

type TProps = {
  label: string;
  href: string;
};

export default function TopNavBarNaviItem({ label, href }: TProps) {
  return (
    <NaviItem>
      <Link href={href}>{label}</Link>
    </NaviItem>
  );
}

const NaviItem = styled.li`
  a {
    padding: 10px 5px;
  }
`;
