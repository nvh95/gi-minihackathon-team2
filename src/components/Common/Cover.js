//kyle
import React from "react";
import styled from "styled-components";
import Section from "./Section";
import mainCover from "../../assets/main-cover.svg";
import cover1 from "../../assets/cover-1.svg";
import cover2 from "../../assets/cover-2.svg";
import Faker from "faker";
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
  const CoWorking = styled.div`
    position: absolute;
    bottom: 140px;
    right: -125px;
    font-size: 70px;
    color: rgba(0,0,0, 0.1);
    transform: rotate(-90deg);
  `;

  const BoxLocation = styled.div``;

  const BoxLocationTop = styled.div`
    background: rgba(243, 243, 243, 0.6);
    backdrop-filter: blur(35.5212px);
    border-radius: var(--radius);
    font-size: 18px;
    font-weight: 500;
    padding: 24px 36px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: #989898;
  `;
  const BoxLocationBottom = styled.div`
    margin-top: 24px;
    display: flex;
  `;

  const Avatar = styled.div`
    width: 30px;
    height: 30px;
    overflow: hidden;
    position: relative;
    img {
      left: 0;
      top: 0;
      width: 100%;
      height:100%;
      position:absolute;
      border-radius: 50%;
    }
  `;

  const Button = styled.button`
    text-align:center;
    padding: 14px 28px;
    border-radius: var(--radius);
    background: var(--primaryColor);
    border:1px solid var(--primaryColor);
    color: white;
    user-select: none;
  `;

  const City = styled.div`
    display:flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  `;
  return (
    <Section>
      <CoverWrapper>
        <ColLeft>
          <Heading>
            A new way to revolutionise your workspace to yourself
          </Heading>
          <BoxLocation>
            <BoxLocationTop>
              <City>
                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.39712 0.556641C6.31973 0.55906 4.32812 1.38537 2.85919 2.85431C1.39025 4.32324 0.563943 6.31485 0.561523 8.39223C0.561523 13.6904 7.85581 21.0454 8.16629 21.3559C8.22752 21.4171 8.31055 21.4515 8.39712 21.4515C8.48369 21.4515 8.56672 21.4171 8.62794 21.3559C8.93843 21.0454 16.2327 13.6904 16.2327 8.39223C16.2303 6.31485 15.404 4.32324 13.935 2.85431C12.4661 1.38537 10.4745 0.55906 8.39712 0.556641V0.556641ZM8.39712 20.6562C7.14277 19.3457 1.21449 12.9111 1.21449 8.39223C1.21449 6.48728 1.97123 4.66035 3.31823 3.31335C4.66524 1.96635 6.49217 1.20961 8.39712 1.20961C10.3021 1.20961 12.129 1.96635 13.476 3.31335C14.823 4.66035 15.5797 6.48728 15.5797 8.39223C15.5797 12.9111 9.65147 19.3457 8.39712 20.6562Z" fill="#989898" stroke="#989898" stroke-width="0.208948"/>
                  <path d="M8.3976 4.14819C7.55816 4.14819 6.73757 4.39712 6.03961 4.86348C5.34164 5.32985 4.79764 5.99272 4.4764 6.76826C4.15516 7.5438 4.07111 8.39718 4.23487 9.22049C4.39864 10.0438 4.80287 10.8001 5.39644 11.3936C5.99002 11.9872 6.74627 12.3914 7.56958 12.5552C8.39289 12.719 9.24628 12.6349 10.0218 12.3137C10.7974 11.9924 11.4602 11.4484 11.9266 10.7505C12.393 10.0525 12.6419 9.23191 12.6419 8.39247C12.6406 7.26722 12.193 6.18842 11.3973 5.39275C10.6017 4.59707 9.52286 4.14949 8.3976 4.14819ZM8.3976 11.9838C7.68731 11.9838 6.99296 11.7732 6.40237 11.3785C5.81179 10.9839 5.35148 10.423 5.07966 9.76681C4.80784 9.11058 4.73672 8.38849 4.87529 7.69184C5.01387 6.9952 5.35591 6.35528 5.85816 5.85303C6.36041 5.35078 7.00032 5.00874 7.69697 4.87017C8.39362 4.73159 9.11571 4.80271 9.77194 5.07453C10.4282 5.34635 10.9891 5.80666 11.3837 6.39725C11.7783 6.98783 11.9889 7.68218 11.9889 8.39247C11.9878 9.3446 11.6091 10.2574 10.9358 10.9307C10.2625 11.6039 9.34973 11.9827 8.3976 11.9838Z" fill="#989898" stroke="#989898" stroke-width="0.208948"/>
                </svg>
                City
              </City>
              <span>Location</span>
              <Button>Schedule Visit</Button>
            </BoxLocationTop>
            <BoxLocationBottom>
                {[1,2,3,4,5].map(idx => (
                  <Avatar key={idx}>
                    <img src={Faker.random.image()}/>
                  </Avatar>
                ))}
            </BoxLocationBottom>
          </BoxLocation>
        </ColLeft>
        <ColRight>
          <Image src={mainCover} />
          <Image1 src={cover1} />
          <Image2 src={cover2} />
          <CoWorking>Co Working</CoWorking>        
        </ColRight>
      </CoverWrapper>
    </Section>
  );
};
export default Cover;
