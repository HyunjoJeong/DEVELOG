import { maxWidth } from "@/app.resources/constants";
import MainLogo from "@components/atoms/common/MainLogo";
import TopNavBarFeatures from "@components/molecules/layout/TopNavBarFeatures";
import TopNavBarNaviItems from "@components/molecules/layout/TopNavBarNaviItems";
import styled from "styled-components";

type TProps = {};

export default function TopNavBar({}: TProps) {
  return (
    <>
      <div className="background" style={{ width: "100%", height: 74 }} />
      <Wrapper style={{ position: "fixed", top: "0px" }}>
        <header>
          <MainLogo />
          <div className="right-items-container">
            <TopNavBarNaviItems />
            <TopNavBarFeatures />
          </div>
        </header>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 74px;

  position: fixed;
  top: 0px;
  z-index: 100;

  background-color: #f4f4f8cc;

  @media (prefers-color-scheme: dark) {
    background-color: #2c2c2fcc;
  }

  header {
    margin: 0 auto;
    max-width: ${maxWidth}px;
    width: 100%;
    padding: 10px 15px;

    display: flex;
    justify-content: space-between;
  }

  .right-items-container {
    display: flex;
  }
`;
