import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Attribution = styled.div`
  background-color: hsl(7, 99%, 70%);
  font-family: "Barlow", sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Attribution>
        Challenge by Frontend Mentor. Coded by{" "}
        <a href="https://github.com/davidthus">davidthus</a>.
      </Attribution>
    </AppContainer>
  );
}

export default App;
