//Truong
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <LeftItems>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Services</Item>
      </LeftItems>
      <MiddleItem>1-Space</MiddleItem>
      <RightItems>
        <Item>Services</Item>
        <Item>Spaces</Item>
        <Item>Events</Item>
      </RightItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 20px;
  gap: 10px;
  align-items: center;
  max-width: 1152px;
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
`;

const LeftItems = styled.ul`
  flex: 1;
  gap: clamp(1rem, 3vw, 3rem);
  color: #686c75;
  text-transform: uppercase;
  display: flex;
`;

const MiddleItem = styled.div`
  flex: 1;
  display: flex;
  font-size: 29.25px;
  white-space: nowrap;
  justify-content: center;
`;

const RightItems = styled.ul`
  flex: 1;
  gap: clamp(1rem, 3vw, 2rem);
  color: #686c75;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  list-style-type: none;
`;

export default Header;
