import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
`;

export const ReplyContainer = styled.section`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 15% auto;
  min-height: 8rem;
  padding: 1rem 1rem 1rem 0;
  margin-bottom: ${(props) => (props.replyOpen ? "0.5rem" : 0)};

  @media screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1rem;
  margin-top: 0.7rem;
`;

export const TopBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 630px) {
    display: ${(props) => (props.desktop ? "none" : "flex")};
  }
`;

export const Edit = styled.button`
  color: ${(props) => props.theme.moderateBlue};
  display: flex;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;

  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px dotted ${(props) => props.theme.moderateBlue};
  }
`;

export const Delete = styled.button`
  color: ${(props) => props.theme.softRed};
  display: flex;
  gap: 0.5rem;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px dotted ${(props) => props.theme.softRed};
  }
`;

export const ReplyWrapper = styled.button`
  color: ${(props) => props.theme.moderateBlue};
  display: flex;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;

  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px dotted ${(props) => props.theme.moderateBlue};
  }

  @media screen and (max-width: 630px) {
    display: ${(props) => (props.desktop ? "none" : "flex")};
  }
`;

export const AtUsername = styled.b`
  color: ${(props) => props.theme.moderateBlue};
  font-weight: 700;
  font-size: 1rem;
`;

export const MobileWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  @media screen and (max-width: 630px) {
    display: flex;
  }
`;
