import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <Background></Background>
    <Wrapper>
      <Content>
        <Description>
          <DescriptionTitle>
            1-Space
          </DescriptionTitle>
          <DescriptionContent>
            Men cannot not live by exchanging articles, but producing them. They
            live by work not trade.
          </DescriptionContent>
        </Description>
        <Company>
          <CompanyTitle>Company</CompanyTitle>
          <CompanyItem>Global Localities</CompanyItem>
          <CompanyItem>Missions</CompanyItem>
          <CompanyItem>Careers</CompanyItem>
          <CompanyItem>Investors</CompanyItem>
          <CompanyItem>Newsroom</CompanyItem>
        </Company>
        <Partnership>
          <PartnershipTitle>Partnership</PartnershipTitle>
          <PartnershipItem>Tasks</PartnershipItem>
          <PartnershipItem>Profile</PartnershipItem>
          <PartnershipItem>Events</PartnershipItem>
          <PartnershipItem>Services</PartnershipItem>
        </Partnership>
        <FollowUs>
          <FollowUsTitle>Follow Us</FollowUsTitle>
          <FollowUsIconList>
            <FollowUsIcon src="https://img.favpng.com/14/17/20/facebook-logo-icon-social-icons-rounded-icon-social-icon-png-favpng-AKaimzg9ZMLri3MhZf9xTJcsU.jpg"/>
            <FollowUsIcon src="https://www.citypng.com/public/uploads/preview/-516141173073bkpm2xhm8.png"/>
            <FollowUsIcon src="https://www.citypng.com/public/uploads/small/31624153862fh4bl2l4ztignscthrsxnoubjnrz0xy8firjmdxn2oqv5ber7wvqit1wwvacdfxvoyaw1a3scf9ixnw9zm1labunmedoovtk1zaz.png"/>
          </FollowUsIconList>
        </FollowUs>
      </Content>
    </Wrapper>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  width: 100%;
  height: 400px;
`

const Wrapper = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
`;

const Background = styled.div`
  position: absolute;
  background: linear-gradient(180deg, rgba(253, 91, 47, 0) 0%, #fd5b2f 100%);
  width: 100%;
  height: 400px;
  opacity: 0.2;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: start;
  padding: 0 128px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 96px;
  flex: 2;
`;

const DescriptionTitle = styled.div`
  font-size: 30px; 
  line-height: 37px;
  margin-bottom: 20px;
`;

const DescriptionContent = styled.div`
  font-size: 16px;
  line-height: 30px;
  width: 70%;
`

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
`;

const CompanyTitle = styled.div`
  font-size: 20.8948px;
  color: #FD5B2F;
`;

const CompanyItem = styled.div`
  font-size: 16px;
  color: black;
`

const Partnership = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
`;

const PartnershipTitle = styled.div`
  font-size: 20.8948px;
  color: #FD5B2F;
`;

const PartnershipItem = styled.div`
  font-size: 16px;
  color: black;
`;

const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 2;
`;

const FollowUsTitle = styled.div`
  font-size: 20.8948px;
  color: #FD5B2F;
`;

const FollowUsIconList = styled.div`
  display: flex;
  gap: 4px;
`;

const FollowUsIcon = styled.img`
  width: 40px;
  height: 40px;
`

export default Footer;
