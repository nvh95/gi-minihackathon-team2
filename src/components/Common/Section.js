//Kyle

import React from "react";
import styled, { css } from "styled-components";

export const Section = ({ children }) => {
  const SectionUI = styled.div`
    padding: 120px 0;
  `;
  const SectionWrapper = styled.div`
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1152px;
  `;
  return (
    <SectionUI>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionUI>
  );
};

export default Section;
