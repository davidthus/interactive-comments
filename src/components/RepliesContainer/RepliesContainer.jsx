import React from "react";
import { Reply } from "./../";
import { Container } from "./RepliesContainer.style";

function RepliesContainer({ replies, dispatch }) {
  return (
    <Container>
      {replies.map((reply, index) => {
        return <Reply key={index} dispatch={dispatch} reply={reply} />;
      })}
    </Container>
  );
}

export default RepliesContainer;
