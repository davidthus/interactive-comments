import React, { useContext, useState } from "react";
import { CurrentUser } from "../../App";
import { ACTIONS } from "../../commentsReducer";
import { ReactComponent as DeleteIcon } from "../../icons/icon-delete.svg";
import { ReactComponent as EditIcon } from "../../icons/icon-edit.svg";
import { ReactComponent as ReplyIcon } from "../../icons/icon-reply.svg";

import { CommentInfo, Modal, Vote } from "./../";
import {
  Actions,
  Container,
  Delete,
  Edit,
  Paragraph,
  ReplyContainer,
  ReplyWrapper,
  TopBarContainer,
} from "./Reply.style";

function Reply({ reply, dispatch }) {
  const currentUser = useContext(CurrentUser);
  const [open, setOpen] = useState(false);

  function handleEdit() {}

  function handleDelete() {
    setOpen(true);
  }

  function handleReply() {}

  return (
    <Container>
      {open && (
        <Modal
          id={reply.id}
          setOpen={setOpen}
          type={ACTIONS.DELETE_REPLY}
          dispatch={dispatch}
        />
      )}
      <ReplyContainer>
        <Vote dispatch={dispatch} id={reply.id} score={reply.score} />
        <div>
          <TopBarContainer>
            <CommentInfo
              avatar={reply.user.image.png}
              date={reply.createdAt}
              username={reply.user.username}
            />
            {currentUser.username === reply.user.username && (
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
            {currentUser.username !== reply.user.username && (
              <ReplyWrapper onClick={handleReply}>
                <ReplyIcon />
                Reply
              </ReplyWrapper>
            )}
          </TopBarContainer>
          <Paragraph>{reply.content}</Paragraph>
        </div>
      </ReplyContainer>
    </Container>
  );
}

export default Reply;
