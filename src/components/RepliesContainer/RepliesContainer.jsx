import React from "react";
import { Reply } from "./../";
import {
  Container,
  Line,
  LineWrapper,
  RepliesWrapper,
} from "./RepliesContainer.style";

function RepliesContainer({ replies, dispatch }) {
  return (
    <Container>
      <LineWrapper>
        <Line />
      </LineWrapper>
      <RepliesWrapper>
        {replies.map((reply, index) => {
          return <Reply key={index} dispatch={dispatch} reply={reply} />;
        })}
      </RepliesWrapper>
    </Container>
  );
}

export default RepliesContainer;
