import React from "react";
import { ACTIONS } from "../../commentsReducer";
import { ReactComponent as Minus } from "../../icons/icon-minus.svg";
import { ReactComponent as Plus } from "../../icons/icon-plus.svg";
import { Container, VoteContainer, Wrapper } from "./Vote.style";

function Vote({ dispatch, id, score, desktop }) {
  function handleDownVote() {
    dispatch({
      type: ACTIONS.DOWNVOTE,
      payload: {
        id: id,
      },
    });
  }

  function handleUpVote() {
    dispatch({
      type: ACTIONS.UPVOTE,
      payload: {
        id: id,
      },
    });
  }

  return (
    <Container desktop={desktop ? true : false}>
      <VoteContainer>
        <Wrapper onClick={handleUpVote}>
          <Plus />
        </Wrapper>
        {score}
        <Wrapper onClick={handleDownVote}>
          <Minus />
        </Wrapper>
      </VoteContainer>
    </Container>
  );
}

export default Vote;
