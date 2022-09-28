import React from "react";
import {
  ButtonsContainer,
  Cancel,
  Container,
  Delete,
  Heading,
  Overlay,
  Paragraph,
} from "./Modal.style";

function Modal({ id, dispatch, type, setOpen }) {
  function handleDelete() {
    dispatch({
      type: type,
      payload: {
        id: id,
      },
    });
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <Overlay>
      <Container>
        <Heading>Delete comment</Heading>
        <Paragraph>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </Paragraph>
        <ButtonsContainer>
          <Cancel onClick={handleCancel}>No, Cancel</Cancel>
          <Delete onClick={handleDelete}>Yes, Delete</Delete>
        </ButtonsContainer>
      </Container>
    </Overlay>
  );
}

export default Modal;
