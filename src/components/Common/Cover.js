//kyle
import React from "react";
import styled, { css } from "styled-components";
import Section from "./Section";
import mainCover from "../../assets/main-cover.svg";
import leftmainCover from "../../assets/left-main-cover.svg";
import cover1 from "../../assets/cover-1.svg";
import cover2 from "../../assets/cover-2.svg";
export const Cover = () => {
  const CoverWrapper = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    margin-left: -16px;
    margin-right: -16px;
  `;
  const ColLeft = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    flex-basis: auto;
    width: 50%;
  `;
  const ColRight = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    flex-basis: auto;
    width: 50%;
    position: relative;
  `;
  const Heading = styled.h1`
    font-size: 60px;
    margin-top: 100px;
  `;
  const Image = styled.img`
    max-width: 476px;
    max-height: 710px;
    margin-right: 80px;
    border-top-left-radius: 45%;
    border-top-right-radius: 45%;
  `;
  const Image1 = styled.img`
    position: absolute;
    top: -5%;
    right: -25px;
    max-width: 230px;
  `;
  const Image2 = styled.img`
    position: absolute;
    top: 42%;
    right: -145px;
    max-width: 240px;
  `;
  const ImageLeftMain = styled.img`
    position: absolute;
    bottom: 0;
    right: -50px;
  `;
  return (
    <Section>
      <CoverWrapper>
        <ColLeft>
          <Heading>
            A new way to revolutionise your workspace to yourself
          </Heading>
        </ColLeft>
        <ColRight>
          <Image src={mainCover} />
          <Image1 src={cover1} />
          <Image2 src={cover2} />
          <ImageLeftMain src={leftmainCover} />
        </ColRight>
      </CoverWrapper>
    </Section>
  );
};
export default Cover;
