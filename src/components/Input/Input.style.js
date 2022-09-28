import styled from "styled-components";

export const Container = styled.form`
  background-color: ${(props) => props.theme.white};
  padding: 2%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
`;

export const CommentInput = styled.textarea`
  border: 1px solid ${(props) => props.theme.grayishBlue};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.1rem;
  resize: none;
  width: 60%;
  height: 6rem;

  &::placeholder {
    color: ${(props) => props.theme.grayishBlue};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.darkBlue};
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
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

export const AvatarContainer = styled.div`
  width: 40px;
`;
