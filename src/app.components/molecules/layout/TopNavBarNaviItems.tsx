import TopNavBarNaviItem from "@components/atoms/layout/TopNavBarNaviItem";
import styled from "styled-components";

type TProps = {};

export default function TopNavBarNaviItems({}: TProps) {
  return (
    <StyledNav>
      <ul>
        <TopNavBarNaviItem label="Home" href="/" />
        <TopNavBarNaviItem label="About" href="/about" />
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 100%;

  ul {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
