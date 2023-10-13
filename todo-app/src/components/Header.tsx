"use client";

import styled from "styled-components";

const HeaderBlock = styled.div`
  color: rgb(255, 149, 179);
`;

export default function Header() {
  return (
    <HeaderBlock>
      <h2>ToDo app</h2>
    </HeaderBlock>
  );
}
