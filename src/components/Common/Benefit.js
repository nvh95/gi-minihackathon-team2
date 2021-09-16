import React from "react";
import styled from "styled-components";
import comm from '../../assets/comm.svg';
import internet from '../../assets/internet.svg';
import wifi from '../../assets/wifi.svg';
import armchair from '../../assets/armchair.svg';
import dumbell from '../../assets/dumbell.svg';

const Benefit = () => (
    <BenefitContainer>
        <BenefitTitle>Why Choose Us?</BenefitTitle>
        <BenefitSummary>The benefits that will make you comfort</BenefitSummary>
        <BenefitList>
        <BenefitItem>
            <BenefitIcon src={comm} alt="icon" />
            <BenefitItemTitle>Community Event</BenefitItemTitle>
            <BenefitItemDescription>Allowing cost savings and convenience through the use of common infrastructures.</BenefitItemDescription>
        </BenefitItem>
        <BenefitItem>
            <BenefitIcon src={dumbell} alt="icon" />
            <BenefitItemTitle>Exercise Facilities</BenefitItemTitle>
            <BenefitItemDescription>Allowing cost savings and convenience through the use of common infrastructures.</BenefitItemDescription>
        </BenefitItem>
        <BenefitItem>
            <BenefitIcon src={wifi} alt="icon" />
            <BenefitItemTitle>High-Speed Wireless</BenefitItemTitle>
            <BenefitItemDescription>Allowing cost savings and convenience through the use of common infrastructures.</BenefitItemDescription>
        </BenefitItem>
        <BenefitItem>
            <BenefitIcon src={internet} alt="icon" />
            <BenefitItemTitle>Global Availability</BenefitItemTitle>
            <BenefitItemDescription>Allowing cost savings and convenience through the use of common infrastructures.</BenefitItemDescription>
        </BenefitItem>
        <BenefitItem>
            <BenefitIcon src={armchair} alt="icon" />
            <BenefitItemTitle>Comfort Lounges</BenefitItemTitle>
            <BenefitItemDescription>Allowing cost savings and convenience through the use of common infrastructures.</BenefitItemDescription>
        </BenefitItem>
        </BenefitList>
    </BenefitContainer>
)

const BenefitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 100px;
`;

const BenefitTitle = styled.div`
    color: #FD5B2F;
    font-size: 18px;
`;

const BenefitSummary = styled.div`
    font-size: 52.2371px;
    line-height: 71px;
    text-align: center;
    width: 30%;
    margin-bottom: 32px;
`;

const BenefitList = styled.div`
    display: flex;
    justify-content: space-around;
`;

const BenefitItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
`;

const BenefitIcon = styled.img`
    width: 50px;
    height: 50px;
`;

const BenefitItemTitle = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
`

const BenefitItemDescription = styled.div`
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    width: 60%;
`

export default Benefit;