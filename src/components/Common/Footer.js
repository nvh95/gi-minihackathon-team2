//Hieu
import React from "react";
import styled from "styled-components";

const Footer = () => (
  <>
    <Background></Background>
    <Wrapper>
      <Content>
        <Description>
          <div style={{ fontSize: "29.2528px", lineHeight: "37px" }}>
            1-Space
          </div>
          <div>
            Men cannot not live by exchanging articles, but producing them. They
            live by work not trade.
          </div>
          <div>
            Hieu test github
          </div>
        </Description>
        <Company>
          <div>Company</div>
          <div>Local</div>
          <div>Global</div>
        </Company>
        <Partnership>
          <div>Tasks</div>
          <div>Profile</div>
        </Partnership>
        <FollowUs>Follow us</FollowUs>
      </Content>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  height: 500px;
  max-width: 1152px;
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
`;

const Background = styled.div`
  position: absolute;
  background: linear-gradient(180deg, rgba(253, 91, 47, 0) 0%, #fd5b2f 100%);
  width: 100%;
  height: 500px;
  opacity: 0.3;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 3;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 2;
`;

const Partnership = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 2;
`;

const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export default Footer;
