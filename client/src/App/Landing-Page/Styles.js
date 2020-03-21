import styled from "styled-components";
import {components, font, layout} from "../../Styles/Shared-Styles";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;

  background-position: center;
`;

export const WelcomeMessageDiv = styled.div`
 display: flex;
 flex-direction: column;
  margin: auto;
  opacity: 1;
  width: 80%;
`;

export const WelcomeMessageHeader = styled.span`
    ${font.title};
    font-size: 46px;
    text-align: center;
    color: white;
`;

export const ActionButtonRow = styled.div`
  ${layout.row};
  width: 50%;
  margin: 5% auto 0 auto;
`;

export const PerformerButton = styled.button`
  ${components.button};
  ${font.text};
  font-weight: 700;
  font-size: 20px;
  opacity: 0.8;
  background-color: gray;
  border: none;
  margin-right: auto;
`;

export const AudienceButton = styled.button`
  ${components.button};
  border: none;
  font-weight: 700;
  font-size: 20px;
  opacity: 0.8;
  
   background-color: gray;

`;
