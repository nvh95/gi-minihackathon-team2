import React from "react";
import styled from "styled-components";
import memberCover from '../assets/member.svg';
import Section from './Common/Section';

const ServicesSection = () => {
  return (
    <Section>
      <Wrapper>
        <LeftPane>
          <Header>Become a member</Header>
            <Title>Ready to try different work environment now?</Title>
            <Content>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.</Content>
            <Menu>
                <ViewButton>Sign Up Now</ViewButton>
                <ViewOutlineButton>Schedule Visit</ViewOutlineButton>
            </Menu>
        </LeftPane>
        <RightPane> 
          <Cover src={memberCover} />
        </RightPane>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`

const LeftPane = styled.div`
  flex: 4;
  margin-top: 100px;
  text-align: left;
`

const RightPane = styled.div`
  flex: 3;
`

const Header = styled.div`
  color: #FD5B2F;
  text-transform: uppercase;
  font-size: 18.81px;
  letter-spacing: 10%;
`

const Title = styled.div`
  font-size: 52.24px;
  padding: 6px 0 20px 0;
`

const Content = styled.div`
  font-family: 'Avenir';
  font-size: 15.67px;
  line-height: 37.61px;
`

const Menu = styled.div`
  display: flex;
  margin-top: 80px;
  gap: 30px;
`

const ViewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FD5B2F;
  border-radius: 5.22371px;
  padding: 9.40268px 36.566px;
  color: white;
  font-family: 'Roboto';

  &:hover {
    cursor: pointer;
  }
`

const ViewOutlineButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FD5B2F;
  border-radius: 5.22371px;
  padding: 9.40268px 36.566px;
  color: #FD5B2F;
  font-family: 'Roboto';

  &:hover {
    cursor: pointer;
  }
`

const Cover = styled.img`
  width: 100%;
`

export default ServicesSection;
