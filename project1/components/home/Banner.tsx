import { breakpoint, theme } from "../../apptheme";
import React from "react";
import styled from "styled-components";

interface BannerProps {
  buttonText: string;
  handleOnClick: () => void;
}

const Banner: React.FC<BannerProps> = ({ buttonText, handleOnClick }) => {
  return (
    <div>
      <TitleStyle>
        <SecondaryTitleStyle>Coffee</SecondaryTitleStyle> Connoisseur
      </TitleStyle>
      <SubTitleStyle>Discover your local coffee shops</SubTitleStyle>
      <ButtonStyle onClick={handleOnClick}>{buttonText}</ButtonStyle>
    </div>
  );
};

export default Banner;

const TitleStyle = styled.h1`
  color: ${theme.color.primary};
  line-height: 1;
  font-size: 3.75rem;
`;
const SecondaryTitleStyle = styled.span`
  color: ${theme.color.white};
`;

const SubTitleStyle = styled.p`
  color: ${theme.color.white};
  font-size: 1.5rem;
  margin-top: 1.25rem;
`;

const ButtonStyle = styled.button`
  margin-top: 1.25rem;
  background-color: ${theme.color.primary};
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  justify-content: flex-start;
  color: ${theme.color.white};
`;
