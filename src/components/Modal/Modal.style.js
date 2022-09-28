import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.section`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1rem;
  text-align: left;
  width: 90%;
`;

export const Delete = styled.button`
  background-color: ${(props) => props.theme.softRed};
  color: ${(props) => props.theme.white};
  padding: 0.9rem 1.9rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Cancel = styled.button`
  background-color: ${(props) => props.theme.grayishBlue};
  color: ${(props) => props.theme.white};
  padding: 0.9rem 1.9rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Heading = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.5rem;
`;
