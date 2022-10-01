import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { reducer } from "./commentsReducer.js";
import { Comment, Input } from "./components";
import Data from "./data.json";

export const INITIAL_STATE = JSON.parse(localStorage.getItem("data")) || Data;
export const CurrentUser = React.createContext();

function App() {
  // initialise state for the entire application
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // update local storage on each state change
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <CurrentUser.Provider value={Data.currentUser}>
        <AppContainer>
          {state.comments.map((comment, index) => {
            return (
              <Comment key={index} dispatch={dispatch} comment={comment} />
            );
          })}
          <Input dispatch={dispatch} type={{ type: "add" }} />
        </AppContainer>
      </CurrentUser.Provider>
      <Attribution>
        Challenge by Frontend Mentor. Coded by{" "}
        <a href="https://github.com/davidthus" target="_blank" rel="noreferrer">
          davidthus
        </a>
        .
      </Attribution>
    </>
  );
}

const AppContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 1.4rem);
  overflow-x: hidden;
  background-color: ${(props) => props.theme.veryLightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: max(2.5rem, 8vmin);
  padding-bottom: max(2.5rem, 8vmin);
`;

const Attribution = styled.div`
  background-color: hsl(7, 99%, 70%);
  font-family: "Barlow", sans-serif;
`;

export default App;
