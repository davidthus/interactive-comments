import styled from "styled-components";

export const Container = styled.form`
  background-color: ${(props) => props.theme.white};
  padding: 2%;
  display: flex;
  align-items: flex-start;
  border-radius: 5px;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  margin-bottom: ${(props) => (props.reply ? "2rem" : "0rem")};

  @media screen and (max-width: 630px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
`;

export const CommentInput = styled.textarea`
  border: 1px solid ${(props) => props.theme.grayishBlue};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.1rem;
  resize: none;
  width: ${(props) => (props.edit ? "100%" : "60%")};
  min-height: 6rem;

  &::placeholder {
    color: ${(props) => props.theme.grayishBlue};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.darkBlue};
  }

  @media screen and (max-width: 630px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.moderateBlue};
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 630px) {
    display: ${(props) => (props.desktop ? "none" : "flex")};
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

export const AvatarContainer = styled.div`
  width: 40px;

  @media screen and (max-width: 630px) {
    display: ${(props) => (props.desktop ? "none" : "block")};
  }
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
`;

export const MobileWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 630px) {
    display: flex;
  }
`;
