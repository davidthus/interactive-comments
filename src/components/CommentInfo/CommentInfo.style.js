import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  gap: 1rem;
`;

export const Username = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1rem;
`;

export const Date = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1rem;
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

export const AvatarContainer = styled.div`
  width: 30px;
`;

export const You = styled.em`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.moderateBlue};
  border-radius: 2px;
  padding: 0.05rem 0.5rem;
  font-size: 0.8rem;
`;
