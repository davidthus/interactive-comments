import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 630px) {
    display: ${(props) => (props.desktop ? "none" : "flex")};
  }
`;

export const VoteContainer = styled.div`
  width: 3rem;
  border-radius: 5px;
  height: 6rem;
  background-color: ${(props) => props.theme.veryLightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  color: ${(props) => props.theme.moderateBlue};

  @media screen and (max-width: 630px) {
    flex-direction: row;
    width: 6rem;
    height: 3rem;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;
