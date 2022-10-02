import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
  margin-bottom: 2rem;

  @media screen and (max-width: 630px) {
    grid-template-columns: 5% 95%;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Line = styled.div`
  border-left: 2px solid ${(props) => props.theme.lightGray};
  width: 50%;

  @media screen and (max-width: 630px) {
    width: 100%;
  }
`;

export const RepliesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
