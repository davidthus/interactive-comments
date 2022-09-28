import React, { useContext, useState } from "react";
import { Modal } from "../.";
import { CurrentUser } from "../../App";
import { ACTIONS } from "../../commentsReducer";
import { ReactComponent as DeleteIcon } from "../../icons/icon-delete.svg";
import { ReactComponent as EditIcon } from "../../icons/icon-edit.svg";
import { ReactComponent as ReplyIcon } from "../../icons/icon-reply.svg";
import { CommentInfo, RepliesContainer, Vote } from "./../";
import {
  Actions,
  CommentContainer,
  Container,
  Delete,
  Edit,
  Paragraph,
  Reply,
  TopBarContainer,
  Wrapper,
} from "./Comment.style";

function Comment({ comment, dispatch }) {
  const currentUser = useContext(CurrentUser);
  const [open, setOpen] = useState(false);

  function handleEdit() {
    dispatch({
      type: ACTIONS.EDIT_COMMENT,
      payload: {
        id: comment.id,
      },
    });
  }
  function handleDelete() {
    setOpen(true);
  }
  function handleReply() {
    dispatch({
      type: ACTIONS.ADD_REPLY,
      payload: {
        id: comment.id,
      },
    });
  }

  return (
    <Container>
      {open && (
        <Modal
          id={comment.id}
          setOpen={setOpen}
          type={ACTIONS.DELETE_COMMENT}
          dispatch={dispatch}
        />
      )}
      <CommentContainer>
        <Vote dispatch={dispatch} id={comment.id} score={comment.score} />
        <Wrapper>
          <TopBarContainer>
            <CommentInfo
              avatar={comment.user.image.webp}
              date={comment.createdAt}
              username={comment.user.username}
            />
            {currentUser.username === comment.user.username && (
              <Actions>
                <Delete onClick={handleDelete}>
                  <DeleteIcon /> Delete
                </Delete>
                <Edit onClick={handleEdit}>
                  <EditIcon />
                  Edit
                </Edit>
              </Actions>
            )}
            {currentUser.username !== comment.user.username && (
              <Reply onClick={handleReply}>
                <ReplyIcon />
                Reply
              </Reply>
            )}
          </TopBarContainer>
          <Paragraph>{comment.content}</Paragraph>
        </Wrapper>
      </CommentContainer>
      {comment.replies.length !== 0 && (
        <RepliesContainer dispatch={dispatch} replies={comment.replies} />
      )}
    </Container>
  );
}

export default Comment;
