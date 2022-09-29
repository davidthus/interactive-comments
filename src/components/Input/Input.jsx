import { useContext, useRef, useState } from "react";
import { CurrentUser } from "../../App";
import { ACTIONS } from "../../commentsReducer";
import {
  Avatar,
  AvatarContainer,
  Button,
  Column,
  CommentInput,
  Container,
} from "./Input.style";

function Input({ type, dispatch, initialInput, setEditOpen, id }) {
  const currentUser = useContext(CurrentUser);
  const [currentInput, setCurrentInput] = useState(initialInput);
  const input = useRef(null);

  function handleChange(e) {
    setCurrentInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (type === "add") {
      dispatch({
        type: ACTIONS.ADD_COMMENT,
        payload: {
          content: input.current.value,
        },
      });
    } else if (type === "edit") {
      setEditOpen(false);
      dispatch({
        type: ACTIONS.EDIT_COMMENT,
        payload: {
          content: currentInput,
          id: id,
        },
      });
    } else if (type === "reply") {
      // dispatch({
      //   type: ACTIONS.ADD_REPLY,
      //   payload: {
      //     content: input.current.value,
      //   },
      // });
    }
    input.current.value = "";
  }

  return (
    <Container>
      {(type === "reply" || type === "add") && (
        <AvatarContainer>
          <Avatar
            src={currentUser.image.webp}
            alt={`${currentUser.username}'s avatar`}
          />
        </AvatarContainer>
      )}
      {type === "edit" ? (
        <Column>
          <CommentInput
            ref={input}
            onChange={handleChange}
            defaultValue={currentInput}
            edit
            placeholder="Add a comment..."
            autoFocus
            required
          />
          <Button type="submit" onClick={handleClick}>
            Update
          </Button>
        </Column>
      ) : (
        <>
          <CommentInput
            ref={input}
            placeholder="Add a comment..."
            autoFocus
            required
          />
          <Button type="submit" onClick={handleClick}>
            {type}
          </Button>
        </>
      )}
    </Container>
  );
}

export default Input;
