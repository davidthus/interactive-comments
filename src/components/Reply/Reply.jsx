import React, { useContext, useState } from "react";
import { CurrentUser } from "../../App";
import { ACTIONS } from "../../commentsReducer";
import { ReactComponent as DeleteIcon } from "../../icons/icon-delete.svg";
import { ReactComponent as EditIcon } from "../../icons/icon-edit.svg";
import { ReactComponent as ReplyIcon } from "../../icons/icon-reply.svg";

import { CommentInfo, Input, Modal, Vote } from "./../";
import {
  Actions,
  AtUsername,
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
  const [editOpen, setEditOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);

  function handleEdit() {
    setEditOpen((prev) => !prev);
  }

  function handleDelete() {
    setOpen(true);
  }

  function handleReply() {
    setReplyOpen((prev) => !prev);
  }

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
          {editOpen ? (
            <Input
              initialInput={reply.content}
              type={{ type: "edit", action: ACTIONS.EDIT_REPLY }}
              dispatch={dispatch}
              setEditOpen={setEditOpen}
              id={reply.id}
            />
          ) : (
            <Paragraph>
              <AtUsername>@{reply.replyingTo} </AtUsername>
              {reply.content}
            </Paragraph>
          )}
        </div>
      </ReplyContainer>
      {replyOpen && (
        <Input
          setReplyOpen={setReplyOpen}
          id={reply.id}
          type={{ type: "reply" }}
          dispatch={dispatch}
        />
      )}
    </Container>
  );
}

export default Reply;
