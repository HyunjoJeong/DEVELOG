import Link from "next/link";
import styled from "styled-components";

type TProps = {
  href: string;
  children: string;
};

export default function StyledLink({ href, children }: TProps) {
  const target = href.includes("http") ? "_blank" : "_self";

  return (
    <StyledWrapper href={href} target={target}>
      {children}
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Link)`
  color: var(--color-primary);
  box-shadow: 0px 0px 0px var(--color-primary);
  transition: box-shadow 300ms ease;

  &:hover {
    box-shadow: 0px 1.5px 0px var(--color-primary);
    transition: box-shadow 100ms ease;
  }
`;
