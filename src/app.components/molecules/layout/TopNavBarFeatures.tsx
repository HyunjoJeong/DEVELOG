import styled from "styled-components";

type TProps = {};

export default function TopNavBarFeatures({}: TProps) {
  return (
    <StyledWrapper>
      {/* <div>알림</div>
      <div>검색</div>
      <div>글 작성?</div>
      <div>my page</div>
      <div>drop down</div> */}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
