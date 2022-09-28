import React, { useContext } from "react";
import { CurrentUser } from "../../App";
import {
  Avatar,
  AvatarContainer,
  Container,
  Date,
  Username,
  You,
} from "./CommentInfo.style";

function CommentInfo({ avatar, username, date }) {
  const currentUser = useContext(CurrentUser);

  return (
    <Container>
      <AvatarContainer>
        <Avatar src={avatar} alt={`${username}'s avatar`} />
      </AvatarContainer>
      {currentUser.username === username && <You>you</You>}
      <Username>{username}</Username>
      <Date>{date}</Date>
    </Container>
  );
}

export default CommentInfo;
