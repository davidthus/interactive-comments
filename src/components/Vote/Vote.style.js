import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;
