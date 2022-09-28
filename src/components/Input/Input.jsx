import { useContext, useRef } from "react";
import { CurrentUser } from "../../App";
import { ACTIONS } from "../../commentsReducer";
import {
  Avatar,
  AvatarContainer,
  Button,
  CommentInput,
  Container,
} from "./Input.style";

function Input({ type, dispatch }) {
  const currentUser = useContext(CurrentUser);
  const input = useRef(null);

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
      dispatch({
        type: ACTIONS.EDIT_COMMENT,
        payload: {
          content: input.current.value,
        },
      });
    } else if (type === "reply") {
      dispatch({
        type: ACTIONS.ADD_REPLY,
        payload: {
          content: input.current.value,
        },
      });
    }
    input.current.value = "";
    console.log("Form button clicked!");
  }

  return (
    <Container>
      {type === "reply" ||
        (type === "add" && (
          <AvatarContainer>
            <Avatar
              src={currentUser.image.webp}
              alt={`${currentUser.username}'s avatar`}
            />
          </AvatarContainer>
        ))}
      <CommentInput
        ref={input}
        placeholder="Add a comment..."
        autoFocus
        required
      />
      <Button type="submit" onClick={handleClick}>
        {type}
      </Button>
    </Container>
  );
}

export default Input;
